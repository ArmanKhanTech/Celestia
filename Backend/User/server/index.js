const express = require('express');
const cors = require('cors');

const routes = require('../routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3002, () => {
    console.log('User micro-service is running on port 3002');
});