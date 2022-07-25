const connection = require('./../models/database')

exports.getDataInDB = () => {
    const data = []
    const query = 'SELECT * FROM items'
    return connection.query(query, (err, rows, fields) => {
        if (err) {
            console.log(err)
        } else {
            console.log(rows)
            return rows
        }
    })

}
