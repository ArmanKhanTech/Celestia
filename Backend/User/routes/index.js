const express = require('express');
const router = express.Router();

const setPfp = require('../controllers/setpfp');
const setStatus = require('../controllers/setStatus');
const deleteAccount = require('../controllers/deleteAccount');

router.post('/setPfp', setPfp);
router.post('/setStatus', setStatus);
router.post('/deleteAccount', deleteAccount);

router.all('*', (req, res) => {
    return res.status(404).json({ message: 'Route not found' });
});

module.exports = router;