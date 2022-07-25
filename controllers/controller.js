const { parseExcel } = require('./../utils/parser')
const path = require('path')
const connection = require('./../models/database')
const { inserter } = require('../utils/inserter')

exports.getJsonFromDatabase = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}
exports.uploadExcelFile = async (req, res) => {
    try {
        //Upload file using multer
        console.log(`Uploading file ${req.file.filename}`)
        //Parse data from file
        const data = parseExcel('uploads/' + req.file.filename)
        // data.forEach(element => {
            console.log(data[0].data);
        // });
        const inserted = inserter(data[0].data)
        if(!inserted)return res.status(500).json({error:'Error inserting data'})
        return res.status(200).json({ message: "Excel file uploaded successfully and parsed int database", data })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

exports.getAllTableData = async (req, res) => {
    try {
        const query = 'SELECT * FROM items;'
        connection.query(query, function (err, rows) {
            if (err) {
                console.log("The error is here")
                return res.status(200).json({ error: err })
            } else {
                console.log(rows)
                return res.status(200).json({ rows })
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

exports.home = async (req, res) => {
    try {
        return res.status(200).sendFile(path.resolve('views/index.html'))
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

