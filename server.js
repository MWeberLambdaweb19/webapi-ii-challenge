const express = require('express');

const dbRouter = require('./data/db-router')

const server = express();

server.use(express.json());
server.use('/api/posts', dbRouter);

server.get('/', (req, res) => {
    res.send(`
    <h1>Mack Weber's Second WebAPI Challenge</h1>
    <p>This is my submission for the challenge</p>
    `);
});

module.exports = server