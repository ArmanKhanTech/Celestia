const express = require('express');
const router = express.Router();

const setPfp = require('../controllers/setPfp');
const setStatus = require('../controllers/setStatus');
const changeName = require('../controllers/changeName');
// const deleteAccount = require('../controllers/deleteAccount');
const getDetails = require('../controllers/getDetails');
const searchUser = require('../controllers/searchUser');

router.post('/setPfp', setPfp);
router.post('/setStatus', setStatus);
router.post('/changeName', changeName);
// router.delete('/deleteAccount', deleteAccount);
router.get('/getDetails', getDetails);
router.get('/searchUser', searchUser);

router.all('*', (req, res) => {
    return res.status(404).json({ message: 'Route not found' });
});

module.exports = router;