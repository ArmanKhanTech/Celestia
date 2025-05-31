const db = require('../config/database');

const changeName = async (req, res) => {
    const { uid, name } = req.body;

    if (!uid || !name) {
        return res.status(400).json({ message: 'User ID and name are required' });
    }

    const query = `
        UPDATE users SET name = $1 WHERE uid = $2
    `;

    try {
        await db.query(query, [name, uid]);
        return res.status(200).json({ message: 'Name updated' });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = changeName;