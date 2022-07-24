const express = require('express')
const router = express.Router()
const {uploadFile} = require('./../utils/store')

const {home,getJsonFromDatabase,uploadExcelFile,getAllTableData} = require('./../controllers/controller')

router.get('/',home)
router.get('/getjson',getJsonFromDatabase)
router.get('/getalldata',getAllTableData)
router.post('/uploadexcel',uploadFile.single('uploadexcel'),uploadExcelFile)

module.exports.router = router
