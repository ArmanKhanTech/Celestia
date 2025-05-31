const db = require('../config/database');
const { v4: uuidv4 } = require('uuid');

const createConversation = async (req, res) => {
    const { participants } = req.body;
    const cid = uuidv4();

    if (!participants || !Array.isArray(participants) || participants.length < 2) {
        return res.status(400).json({ message: 'At least two participants are required' });
    }

    const checkQuery = `
        SELECT cid FROM conversations
        WHERE participants @> $1::jsonb AND participants <@ $1::jsonb
    `;

    try {
        const checkResult = await db.query(checkQuery, [JSON.stringify(participants)]);
        if (checkResult.rows.length > 0) {
            return res.status(200).json({ cid: cid });
        }

        const insertQuery = `
            INSERT INTO conversations (cid, participants)
            VALUES ($1, $2::jsonb)
        `;

        await db.query(insertQuery, [cid, JSON.stringify(participants)]);
        return res.status(200).json({ cid: cid });
    } catch (err) {
        console.error('Failed to create conversation:', err);
        return res.status(500).json({ message: 'Failed to create conversation' });
    }
}

module.exports = createConversation;