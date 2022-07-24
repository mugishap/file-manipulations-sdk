const XLSX = require('xlsx');
const { parseExcel } = require('./../utils/parser')
const path = require('path')
const connection = require('./../models/database')

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
        parseExcel(__basedir + '/uploads/' + req.file.filename).forEach(element => {
            console.log(element.data);
        });
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
                return res.status(200).json({rows})
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

