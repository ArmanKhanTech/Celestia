const express = require('express');
const routes = require('../routes');

const app = express();

app.use(express.json());
app.use('/', routes);

app.listen(3001, () => {
    console.log('Auth microservice is running on port 3001');
});