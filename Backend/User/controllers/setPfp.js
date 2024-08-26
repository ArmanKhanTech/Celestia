const db = require('../config/database');

const setPfp = async (req, res) => {
    const { uid, pfp_url } = req.body;

    const query = `
        UPDATE users SET pfp_url = $1 WHERE uid = $2
    `;

    try {
        await db.query(query, [pfp_url, uid]);
        return res.status(200).json({ message: 'Profile picture updated' });
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = setPfp;