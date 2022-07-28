const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
const { parseExcel } = require('./../utils/parser')
const path = require('path')
const connection = require('./../models/database')
const { inserter } = require('../utils/inserter')
const { getNewEntries, rowComparer } = require('../utils/comparer')
const { updater } = require('../utils/updater')
const jwt = require('jsonwebtoken')

exports.getJsonFromDatabase = async (req, res) => {
    try {
        const query = 'SELECT * FROM items'
        connection.query(query, (err, result, fields) => {
            if (err) {
                return res.status(200).json({ error: err })
            } else {

                return res.status(200).json({ length: result.length, result })
            }
        })
    } catch (error) {
        //console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

exports.home = async (req, res) => {
    try {
        return res.status(200).sendFile(path.resolve('views/index.html'))
    } catch (error) {
        //console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

exports.uploadExcelFile = async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: 'No file was uploaded' })
        if (req.file.filename !== "uploadexcel-items.xlsx") return res.status(400).json({ error: "File name should be 'items.xlsx' " })

        //Upload file using multer
        //console.log(`Uploading file ${req.file.filename}`)
        //Parse data from file
        const data = parseExcel('uploads/' + req.file.filename)

        const array1 = data[0].data
        const query = 'SELECT * FROM items'

        connection.query(query, (err, rows, fields) => {
            if (err) {
                //console.log(err)
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
                //console.log("New Entries: " + newEntries.length)

                //Get changed rows and updated the in database
                if (newEntries.length > 0) {
                    //Insert new data into database
                    const inserted = (newEntries.length > 0) ? inserter(newEntries) : ""
                    if (inserted == false) return res.status(500).json({ error: 'Error in inserting data' })
                }

                const changedRows = rowComparer(array1, array2)

                if (changedRows.length > 0) {
                    updater(changedRows)
                }

                //Check for updated data
                return res.status(200).json({ message: "Excel file uploaded successfully and parsed int database", length: rows.length, data })
            }
        })

    } catch (error) {
        //console.log(error)
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
                //console.log(result)
                return res.status(200).json({ result })
            }
        })
    } catch (error) {
        //console.log(error)
        return res.status(200).json({ length: result.length, result })
    }
}

exports.home = async (req, res) => {
    try {
        return res.status(200).sendFile(path.resolve('views/index.html'))
    } catch (error) {
        //console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

exports.getAuthentication = async (req, res) => {
    try {
        if (req.headers.authorization) {
            const hasToken = req.headers.authorization.split(" ")[1]
            if (hasToken) {
                const decoded = await jwt.verify(hasToken, JWT_SECRET_KEY)
                if (decoded) {
                    return res.status(200).json({ message: `You are already authenticated and your token was given ${decoded.given}` })
                }
                else {
                    return res.status(200).json({ message: "You are not authenticated" })
                }
            }
        }
        const token = jwt.sign({}, JWT_SECRET_KEY, { expiresIn: '1h' })
        if (!token) return res.status(500).json({ error: 'Error in generating token' })
        return res.status(200).json({ token, message: "Authenticated successfully. Your token expires in one hour." })
    } catch (error) {
        //console.log(error)
        return res.status(500).json({ error: error.message })
    }
}
