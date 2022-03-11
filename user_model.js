require('dotenv').config();

const { Pool } = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Rotten_Potatoes',
    password: 'Dk_D0oM13!',
    port: 7213
})

// const isProduction = process.end.NODE_ENV === 'production';

// const connectionString = `postgressql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

// const pool = new Pool({
//     connectionString: isProduction ? process.env.DATABASE_URL : connectionString
// });

// module.exports = { pool };