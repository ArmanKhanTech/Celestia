const db = require('../config/database');

const deleteAccount = async (req, res) => {
    const { uid } = req.body;

    if (!uid) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    try {
        // Delete user from conversations
        const deleteConversationsQuery = `
            DELETE FROM conversations
            WHERE participants @> $1::jsonb OR participants <@ $1::jsonb
        `;
        await db.query(deleteConversationsQuery, [JSON.stringify([uid])]);

        // Delete user from messages
        const deleteMessagesQuery = `
            DELETE FROM messages
            WHERE cid IN (
                SELECT cid FROM conversations WHERE participants @> $1::jsonb OR participants <@ $1::jsonb
            )
        `;
        await db.query(deleteMessagesQuery, [JSON.stringify([uid])]);

        // Delete user from users table
        const deleteUserQuery = `
            DELETE FROM users
            WHERE uid = $1
        `;
        await db.query(deleteUserQuery, [uid]);

        return res.status(200).json({ message: 'Account deleted successfully' });
    } catch (err) {
        console.error('Delete account error', err);
        return res.status(500).json({ message: 'Failed to delete account' });
    }
}

module.exports = deleteAccount;