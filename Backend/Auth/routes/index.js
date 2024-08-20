const express = require('express');
const router = express.Router();

const signin = require('../controllers/signin');
// const signup = require('../controllers/signup');
// const signout = require('../controllers/signout');
// const verify = require('../controllers/verify');
// const reset = require('../controllers/reset');
// const change = require('../controllers/change');
// const remove = require('../controllers/remove');

router.post('/signin', signin);
// router.post('/signup', signup);
// router.post('/signout', signout);
// router.post('/verify', verify);
// router.post('/reset', reset);
// router.post('/change', change);
// router.post('/remove', remove);

router.all('*', (req, res) => {
    return res.status(404).json({ message: 'Route not found' });
});

module.exports = router;