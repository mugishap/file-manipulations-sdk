const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./models/database')
require('dotenv').config()

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to database')
})


const PORT = process.env.PORT
app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server is running on port ${PORT}`)
})
