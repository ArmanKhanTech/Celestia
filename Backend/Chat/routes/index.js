const express = require('express');
const router = express.Router();

const createConversation = require('../controllers/createConverstion');
const fetchConversations = require('../controllers/fetchConversations');
const fetchMessages = require('../controllers/fetchMessages');

router.post('/createConversation', createConversation);
router.get('/fetchConversations', fetchConversations);
router.get('/fetchMessages', fetchMessages);

router.all('*', (req, res) => {
    return res.status(404).json({ message: 'Route not found' });
});

module.exports = router;