const db = require('../config/database');

const fetchMessages = async (req, res) => {
    const { cid } = req.query;

    const query1 = `
        SELECT  *
        FROM messages
        WHERE cid = $1
    `;

    try {
        const { rows } = await db.query(query1, [cid]);
        res.status(200).json(rows);
    }
    catch (error) {
        return res.status(500).json({ message: 'Failed to fetch messages' });
    }
}

module.exports = fetchMessages;
