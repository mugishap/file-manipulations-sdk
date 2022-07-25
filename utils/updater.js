const connection = require('./../models/database')

const getNewStatus = (currentStatus) => {
    if (currentStatus === "NEW") {
        return "UPDATEDx1"
    }
    else if (currentStatus[0] === "U") {
        const times = currentStatus.split("x")[1]
        times++
        return "UPDATEDx" + times
    }
}

exports.updater = (arrayOfChangedElements) => {
    arrayOfChangedElements.forEach(element => {
        const query = `UPDATE TABLE items WHERE code=${element.code} SET code='${element.code}',description='${element.description}',item_name='${element.item_name}',instruction='${element.instruction}',unit='${element.unit}',price=${element.price},insurance='${element.insurance}',status='${getNewStatus(element.status)}'`
        connection.query(query, (err, rows) => {
            if (err) {
                console.log(err.message)
                return err
            } else {
                console.log("Row updated")
            }
        }
        )
    });
    return true
}
