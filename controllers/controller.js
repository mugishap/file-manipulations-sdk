const XLSX = require('xlsx');

exports.getJsonFromDatabase = async (req, res) => {
    
}
exports.uploadExcelFile = async (req, res) => {

    const parseExcel = (filename) => {

        const excelData = XLSX.readFile(filename);

        return Object.keys(excelData.Sheets).map(name => ({
            name,
            data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
        }));
    };

    parseExcel("./ss.xls").forEach(element => {
        console.log(element.data);
    });

}
exports.getAllTableData = async (req, res) => {

}

