const mysql = require('mysql')
require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: 'items_username',
    password: process.env.PASSWORD,
    database:process.env.DATABASE
})

module.exports = connection
