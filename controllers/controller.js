const { parseExcel } = require('./../utils/parser')
const path = require('path')
const connection = require('./../models/database')
const { inserter } = require('../utils/inserter')
const { getDataInDB } = require('../utils/getter')
const { getNewEntries } = require('../utils/comparer')

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

        const array1 = data[0].data
        const array2 = getDataInDB()
        console.log(array1, array2)
        //Compare data from file with data in database
        const newEntries = getNewEntries(array1, array2)
        console.log("New Entries :" + newEntries)

        //Insert new data into database
        const inserted = (newEntries.length > 0) ? inserter(newEntries) : ""
        if (inserted == false) return res.status(500).json({ error: 'Error in inserting data' })
        if (inserted == "") return res.status(500).json({ error: 'No data was inserted. File not changed!!!' })

        //Check for updated data

        return res.status(200).json({ message: "Excel file uploaded successfully and parsed int database", data })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

exports.getAllTableData = async (req, res) => {
    try {
        const query = 'SELECT * FROM items'
        connection.query(query, (err, result, fields) => {
            if (err) {
                return res.status(200).json({ error: err })
            } else {
                console.log(result)
                return res.status(200).json({ result })
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

