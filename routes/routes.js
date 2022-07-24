const express = require('express')
const router = express.Router()

router.get('/getjson',getJsonFromDatabase)
router.get('/getalldata',getAllTableData)
router.post('/uploadexcel',uploadExcelFile)

