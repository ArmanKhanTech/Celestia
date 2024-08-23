const db = require('../config/database');

const getDetails = async (req, res) => {
    const { uid } = req.query;

    const query = `
        SELECT uname, name, pfp_url, status, date_join FROM users WHERE uid = $1
    `;

    try {
        const { rows } = await db.query(query, [uid]);
        return res.status(200).json(rows[0]);
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = getDetails;