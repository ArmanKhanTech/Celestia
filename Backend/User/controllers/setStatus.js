const db = require('../config/database');

const setStatus = async (req, res) => {
    const { uid, status } = req.body;

    const query = `
        UPDATE users SET status = $1 WHERE uid = $2
    `;

    try {
        await db.query(query, [status, uid]);
        return res.status(200).json({ message: 'Status updated' });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = setStatus;