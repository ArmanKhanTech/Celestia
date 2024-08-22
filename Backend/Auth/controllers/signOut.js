const db = require('../config/database');

const signout = async (req, res) => {   
    const { uid } = req.body;
    const timestamp = new Date();
    
    const query1 = `
        UPDATE users SET last_seen = $1 WHERE uid = $2
    `;

    const query2 = `
        UPDATE users SET is_active = FALSE WHERE uid = $1
    `;

    try {
        await Promise.all([
            db.query(query1, [timestamp, uid]),
            db.query(query2, [uid])
        ]);
        return res.status(200).json({ message: 'User signed out successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = signout;