const express = require('express');
const router = express.Router();

const signIn = require('../controllers/signIn');
const signUp = require('../controllers/signUp');
const signOut = require('../controllers/signOut');
const verify = require('../controllers/verify');
// const remove = require('../controllers/remove');

router.post('/signIn', signIn);
router.post('/signUp', signUp);
router.post('/signOut', signOut);
router.post('/verify', verify);
// router.post('/remove', remove);

router.all('*', (req, res) => {
    return res.status(404).json({ message: 'Route not found' });
});

module.exports = router;