const db = require('../config/database');

const searchUser = async (req, res) => {
    const { uname } = req.query;

    const query = `
        SELECT * FROM users WHERE uname LIKE $1
    `;

    try {
        const { rows } = await db.query(query, [`%${uname}%`]);
        return res.status(200).json({ result: rows });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = searchUser;