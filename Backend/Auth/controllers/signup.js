const db = require('../config/database');

const signup = async (req, res) => {
    const { uid, uname, name, email } = req.body;
    const timestamp = new Date();

    if (!uid || !uname || !name || !email) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const query = `
        INSERT INTO users (uid, uname, name, email, date_join, is_active, last_seen,
        pfp_url, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `;

    try {
        await db.query(query, [uid, uname, name, email, timestamp, true, timestamp, '', '']);
        return res.status(200).json({ message: 'User signed up successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = signup;