const path = require('path');
const dotenv = require('dotenv');
dotenv.config({
    path: path.resolve(__dirname, '..', '..', '.env')
});
const { Pool } = require('pg');
let config;
if(process.env.DATABASE_URL) {
    config = {
        connectionString: process.env.DATABASE_URL
    }
} else {
    config = {
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        user: process.env.POSTGRES_USER,
        password: `${process.env.POSTGRES_PASSWORD}`,
        database: process.env.POSTGRES_DB
    };
}

const pool = new Pool(config);

module.exports = pool;