const db = require('../config/database');

const fetchConversations = async (req, res) => {
    const { uid } = req.query;

    const query1 = `
        SELECT cid, participants
        FROM conversations
        WHERE participants @> $1::jsonb
    `;

    try {
        const conversationsResult = await db.query(query1, [JSON.stringify([uid])]);
        const conversations = conversationsResult.rows;

        if (conversations.length === 0) {
            return res.status(200).json([]);
        }
        const conversationIds = conversations.map((conversation) => conversation.cid);

        const participants = conversations.map((row) => row.participants).flat();
        const uniqueParticipantIds = [...new Set(participants)];

        const query2 = `
            SELECT uid, uname, name, pfp_url
            FROM users
            WHERE uid = ANY($1)
        `;

        const query3 = `
            SELECT DISTINCT ON (cid) cid, mid, message, status, sent_at, received_at
            FROM messages
            WHERE cid = ANY($1)
            ORDER BY cid, received_at DESC
        `;

        const [usersResult, messagesResult] = await Promise.all([
            db.query(query2, [uniqueParticipantIds]),
            db.query(query3, [conversationIds])
        ]);

        const users = usersResult.rows;
        const messages = messagesResult.rows;

        const response = conversations.map((conversation) => {
            const interlocutor = users.filter((user) => conversation.participants.includes(user.uid) && user.uid !== uid);
            const recentMessage = messages.find((message) => message.cid === conversation.cid);

            return {
                cid: conversation.cid,
                interlocutor: interlocutor[0],
                recentMessage: recentMessage ? recentMessage.message : null,
                recentMessageTimestamp: recentMessage ? recentMessage.sent_at : null
            };
        });
        return res.status(200).json(response);
    } catch (err) {
        console.error('Fetch conversations error', err);
        return res.status(500).json({ message: 'Failed to fetch conversations' });
    }
}

module.exports = fetchConversations;