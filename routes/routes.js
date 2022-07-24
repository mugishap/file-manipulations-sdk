const express = require('express')
const router = express.Router()

const {getJsonFromDatabase,uploadExcelFile,getAllTableData} = require('./../controllers/controller')

router.get('/getjson',getJsonFromDatabase)
router.get('/getalldata',getAllTableData)
router.post('/uploadexcel',uploadExcelFile)

module.exports.router = router
