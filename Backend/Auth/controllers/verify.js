const db = require('../config/database');

const verify = async (req, res) => {
    const { username } = req.body;
    try {
        const result = await db.query('SELECT * FROM users WHERE uname = $1', [username]);
        if (result.rows.length === 0) {
            return res.status(200).json({ message: 'User not found' });
        }
        res.json(result.rows);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
};

module.exports = verify;