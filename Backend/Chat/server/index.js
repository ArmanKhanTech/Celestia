const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
const redis = require('redis');
const http = require('http');

const routes = require('../routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const server = http.createServer(app);

const wss = new WebSocket.Server({ noServer: true });
const subscribedChannels = new Set();

server.listen(3003, () => {
    console.log('Chat micro-service is running on port 3003');
});

server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});

const redisPublisher = redis.createClient({ url: 'redis://localhost:6379' });
const redisSubscriber = redis.createClient({ url: 'redis://localhost:6379' });

(async () => {
    try {
        await redisPublisher.connect();
    } catch (err) {
        console.error('Failed to connect to Redis publisher:', err);
        process.exit(1);
    }

    try {
        await redisSubscriber.connect();
    } catch (err) {
        console.error('Failed to connect to Redis subscriber:', err);
        process.exit(1);
    }
})();

wss.on('connection', (ws) => {
    // change status of user to online
    console.log('WebSocket client connected');

    ws.on('message', async (message) => {
        try {
            const parsedMessage = JSON.parse(message);
            const cid = parsedMessage.cid;

            if (!subscribedChannels.has(cid)) {
                await redisSubscriber.subscribe(cid, (message) => {
                    wss.clients.forEach((client) => {
                        if (client.readyState === WebSocket.OPEN) {
                            client.send(message);
                        }
                    });
                });
                subscribedChannels.add(cid);
            }

            await redisPublisher.publish(cid, message, (err) => {
                if (err) {
                    console.error('Failed to publish message:', err);
                }
            });
        } catch (err) {
            // TODO: send error message to client
            console.error('Failed to process message:', err);
        }
    });

    ws.on('close', () => {
        // change status of user to offline and modify last seen
        console.log('WebSocket client disconnected');
    });

    ws.on('error', (err) => {
        console.error('WebSocket error:', err);
    });
});
