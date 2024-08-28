const db = require('../config/database');

const fetchConversations = async (req, res) => {
    const { uid } = req.body;

    const query1 = `
        SELECT cid, participants
        FROM conversations
        WHERE participants @> $1::jsonb
    `;

    try {
        const result = await db.query(query1, [JSON.stringify([userId])]);

        // retive the details of the participants from the users table baased on the participants array
        const query2 = `
            SELECT uid, username
            FROM users
            WHERE uid = ANY($1)
        `;

        const participants = result.rows.map((row) => row.participants).flat();
        const participantIds = participants.map((participant) => participant.uid);


        return res.status(200).json(result.rows);
    } catch (err) {
        console.error('Failed to fetch conversations:', err);
        return res.status(500).json({ message: 'Failed to fetch conversations' });
    }
}

module.exports = fetchConversations;