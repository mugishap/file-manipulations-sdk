const mysql = require('mysql')
require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: 'root',
    password: process.env.PASSWORD,
    database:process.env.DATABASE
})

module.exports = connection
