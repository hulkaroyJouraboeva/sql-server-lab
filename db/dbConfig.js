const pgPromise = require('pg-promise');

require('dotenv').config();
// same task, different methods ⬆⬇
// const dotenv = require('dotenv');
// dotenv.config();

const connection = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER
};

const database = pgPromise(connection);

module.exports = database;