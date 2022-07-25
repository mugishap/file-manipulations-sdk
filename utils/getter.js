const connection = require('./../models/database')

exports.getDataInDB = () => {
    const data = []
    const query = 'SELECT * FROM items'
    connection.query(query, (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            return rows
        }
    })

}
