const express = require('express')
const router = express.Router()
const { uploadFile } = require('./../utils/store')
// const {} = require('swa')
const { home, getJsonFromDatabase, uploadExcelFile, getAllTableData ,getAuthentication} = require('./../controllers/controller')
const { checkForAccess } = require('../middlewares/auth')

router.get('/', home)
router.get('/getjson', checkForAccess, getJsonFromDatabase)
router.get('/getalldata', checkForAccess, getAllTableData)
router.post('/uploadexcel', [checkForAccess, uploadFile.single('uploadexcel')], uploadExcelFile)
router.get('/getauthentication', getAuthentication)

module.exports.router = router

