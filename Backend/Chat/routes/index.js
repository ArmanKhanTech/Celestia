const express = require('express');
const router = express.Router();

const createConversation = require('../controllers/createConverstion');

router.post('/createConversation', createConversation);

router.all('*', (req, res) => {
    return res.status(404).json({ message: 'Route not found' });
});

module.exports = router;