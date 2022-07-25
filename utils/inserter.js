const connection = require('./../models/database')

exports.inserter = (array) => {
    array.forEach(element => {
        const query = `INSERT INTO items (code,description,item_name,instruction,unit,price,insurance,status) VALUES ('${element.code}','${element.description}','${element.item_name}','${element.instruction}','${element.unit}',${element.price},'${element.insurance}','${element.status}')`
        connection.query(query, (err, rows) => {
            if (err) {
                console.log(err)
                return err
            } else {
                console.log("Row inserted")
            }
        }
        )
    });
    return true
}
