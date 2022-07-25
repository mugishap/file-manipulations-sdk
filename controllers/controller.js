const { parseExcel } = require('./../utils/parser')
const path = require('path')
const connection = require('./../models/database')
const { inserter } = require('../utils/inserter')
const { getDataInDB } = require('../utils/getter')
const { getNewEntries } = require('../utils/comparer')
const difference = require('array-difference')


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
        const query = 'SELECT * FROM items'

        connection.query(query, (err, rows, fields) => {
            if (err) {
                console.log(err)
            } else {
                // return rows

                //Compare data from file with data in database
                const newEntries = getNewEntries(array1, rows)
                console.log("()====>New Entries :" + difference(array1, rows))
                //Insert new data into database
                const inserted = (newEntries.length > 0) ? inserter(newEntries) : ""
                if (inserted == false) return res.status(500).json({ error: 'Error in inserting data' })
                if (inserted == "") return res.status(500).json({ error: 'No data was inserted. File not changed!!!' })

                //Check for updated data
                return res.status(200).json({ message: "Excel file uploaded successfully and parsed int database", length: data.length, data })
            }
        })

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

