const express = require('express');
const app = express();
const cors = require('cors');
const tunerController = require('../controllers/tunerController');

express.use(express.json());
express.use(cors());

app.get('/', (request, response) => {
    response
        .status(200)
        .send('Welcome to your Tuner App!');
});

app.use('/songs', tunerController);

app.get('*', (request, response) => {
    response
        .status(404)
        .send('This is not the page you\'re looking for');
});

module.exports = app;