const db = require('../config/database');

const signin = async (req, res) => {
    const { uid } = req.body;
    const timestamp = new Date();
    const query = `
        UPDATE users SET last_seen = $1 WHERE uid = $2
    `;
    db.query(query, [timestamp, uid], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Internal server error' });
        }
        return res.status(200).json({ message: 'User signed in successfully' });
    });
}

module.exports = signin;