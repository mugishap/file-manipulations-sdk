const mysql = require('mysql')
const { registerSchema } = require('swaggiffy')
require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: 'items_username',
    password: process.env.PASSWORD,
    database:process.env.DATABASE
})

module.exports = connection

