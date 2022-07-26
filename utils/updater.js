const connection = require('./../models/database')

const getNewStatus = (currentStatus) => {
    if (currentStatus.toLowerCase() === "new") {
        return "UPDATEDx1"
    }
    else if (currentStatus[0].toLowerCase() === "u") {
        let times = currentStatus.split("x")[1]
        times++
        return "UPDATEDx" + times
    }
    else {
        return "NEW"
    }
}

exports.updater = (arrayOfChangedElements) => {
    arrayOfChangedElements.forEach(element => {
        const query = `UPDATE items SET code='${element.code}',description='${element.description}',item_name='${element.item_name}',instruction='${element.instruction}',unit='${element.unit}',price=${element.price},insurance='${element.insurance}',status='${getNewStatus(element.status)}' WHERE code='${element.code}' `
        connection.query(query, (err, rows) => {
            //console.log(query)
            if (err) {
                //console.log(err.message)
                return err
            } else {
                //console.log("Row updated")
            }
        }
        )
    });
    return true
}
