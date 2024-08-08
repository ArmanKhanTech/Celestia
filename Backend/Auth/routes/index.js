const router = require('express').Router();

router.post('/register', (req, res) => {
    res.json({ message: 'User registered' });
});

router.post('/login', (req, res) => {
    res.json({ message: 'User logged in' });
});

router.all('/', (req, res) => {
    res.json({ message: 'Auth Microservice' });
});

module.exports = router;