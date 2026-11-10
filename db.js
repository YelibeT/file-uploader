import 'dotenv/config'
import pg from 'pg'

const { Pool } = pg
const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING
})

pool.query('SELECT NOW()')
    .then((res) => {
        console.log("Connection established", res.rows[0].now)
    })
    .catch((err) => {
        console.log("Connection failed", err.message)
    });
