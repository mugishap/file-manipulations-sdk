const { parseExcel } = require('./../utils/parser')
const path = require('path')
const connection = require('./../models/database')
const { inserter } = require('../utils/inserter')
const { getNewEntries } = require('../utils/comparer')
const { updater } = require('../utils/updater')


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

                //Check if code exists in database
                const array2 = rows.map(element => {
                    return {
                        code: element.code,
                        description: element.description,
                        item_name: element.item_name,
                        instruction: element.instruction,
                        unit: element.unit,
                        price: element.price,
                        insurance: element.insurance,
                        status: element.status
                    }
                })


                const newEntries = getNewEntries(array1, array2)
                console.log("New Entries: " + newEntries)

                //Get changed rows and updated the in database
                const changedRows = array2.filter(element => {
                    return newEntries.includes(element.code)
                })
                if (changedRows.length > 0) {
                    updater(changedRows)
                }
                //Insert new data into database
                const inserted = (newEntries.length > 0) ? inserter(newEntries) : ""
                if (inserted == false) return res.status(500).json({ error: 'Error in inserting data' })
                if (inserted == "") return res.status(500).json({ error: 'No data was inserted. File not changed!!!' })

                //Check for updated data
                return res.status(200).json({ message: "Excel file uploaded successfully and parsed int database", length: rows.length, data })
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

