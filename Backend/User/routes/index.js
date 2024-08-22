const express = require('express');
const router = express.Router();

// const setPfp = require('../controllers/setpfp');
// const setStatus = require('../controllers/setStatus');
// const deleteAccount = require('../controllers/deleteAccount');
const getDetails = require('../controllers/getDetails');

// router.post('/setPfp', setPfp);
// router.post('/setStatus', setStatus);
// router.delete('/deleteAccount', deleteAccount);
router.get('/getDetails', getDetails);

router.all('*', (req, res) => {
    return res.status(404).json({ message: 'Route not found' });
});

module.exports = router;