const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
const redis = require('redis');
const http = require('http');

const routes = require('../routes');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ noServer: true });

const redisPublisher = redis.createClient({ host: 'localhost', port: 6379 });
const redisSubscriber = redis.createClient({ host: 'localhost', port: 6379 });

redisSubscriber.subscribedChannels = new Set();

wss.on('connection', (ws) => {
    let conversationId;

    ws.on('message', (message) => {
        try {
            const parsedMessage = JSON.parse(message);
            conversationId = parsedMessage.conversationId;

            // Subscribe to the conversation channel if not already subscribed
            if (!redisSubscriber.subscribedChannels.has(conversationId)) {
                redisSubscriber.subscribe(conversationId, (err) => {
                    if (err) {
                        console.error(`Failed to subscribe to channel ${conversationId}:`, err);
                    } else {
                        redisSubscriber.subscribedChannels.add(conversationId);
                    }
                });
            }

            // Publish message to Redis channel
            redisPublisher.publish(conversationId, message);
        } catch (err) {
            console.error('Failed to process message:', err);
        }
    });

    ws.on('close', () => {
        // Handle WebSocket close event if needed
    });

    ws.on('error', (err) => {
        console.error('WebSocket error:', err);
    });
});

redisSubscriber.on('message', (channel, message) => {
    // Broadcast message to all WebSocket clients subscribed to the conversation
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            try {
                const parsedMessage = JSON.parse(message);
                if (parsedMessage.conversationId === channel) {
                    client.send(message);
                }
            } catch (err) {
                console.error('Failed to send message to client:', err);
            }
        }
    });
});

redisSubscriber.on('error', (err) => {
    console.error('Redis subscriber error:', err);
});

redisPublisher.on('error', (err) => {
    console.error('Redis publisher error:', err);
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3003, () => {
    console.log('Chat micro-service is running on port 3003');
});