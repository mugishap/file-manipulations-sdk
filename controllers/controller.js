const XLSX = require('xlsx');
const {parseExcel} = require('./../utils/parser')

exports.getJsonFromDatabase = async (req, res) => {

}
exports.uploadExcelFile = async (req, res) => {

    //Upload file using multer

    parseExcel(__basedir+'/uploads/'+req.file.filename).forEach(element => {
        console.log(element.data);
    });

}
exports.getAllTableData = async (req, res) => {

}

exports.home = async (req, res) => {
    res.sendFile(__dirname + '/index.html')
}

