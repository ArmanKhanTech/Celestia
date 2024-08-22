const db = require('../config/database');

const signout = async (req, res) => {   
    const { uid } = req.body;
    const timestamp = new Date();
    
    const query = `
        UPDATE users SET last_seen = $1 WHERE uid = $2
    `;

    try {
        await db.query(query, [timestamp, uid]);
        return res.status(200).json({ message: 'User signed out successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = signout;