const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('uploads/'))
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-'+file.originalname)
    },
})
exports.uploadFile = multer({ storage: storage })
