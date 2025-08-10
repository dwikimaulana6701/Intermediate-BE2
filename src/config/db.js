const mysql = require('mysql2/promise');

require("dotenv").config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit : 10,
    queueLimit: 0,
});

async function testDBConnection() {
    try {
        const connection = await pool.getConnection();
        console.log("Database connected successfully!");
        connection.release();
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        process.exit(1);
    }
}
testDBConnection();

module.exports = pool;