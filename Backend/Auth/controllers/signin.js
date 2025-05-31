const db = require('../config/database');

const signin = async (req, res) => {
    const { uid } = req.body;
    const timestamp = new Date();

    if (!uid) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    const query1 = `
        UPDATE users SET last_seen = $1 WHERE uid = $2
    `;

    const query2 = `    
        UPDATE users SET is_active = true WHERE uid = $1
    `;

    try {
        await db.query(query1, [timestamp, uid]);
        await db.query(query2, [uid]);
        return res.status(200).json({ message: 'User signed in successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = signin;