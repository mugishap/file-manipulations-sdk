const _ = require('lodash')

exports.getNewEntries = (array1, array2) => {

    const len1 = array1.length
    const len2 = array2.length
    if (len1 - len2 <= 0) return []
    else {
        const diff = len1 - len2
        const newEntries = array1.slice(-diff)
        return newEntries
    }

}

//Returns all changed rows to be updated
exports.rowComparer = (array1, array2) => {
    const len1 = array1.length
    const len2 = array2.length

    const changedRows = []
    if (len1 != len2) return { status: false, message: "Array number is not equal" }
    if (len1 === 0 && len2 === 0) return { status: false, message: "No rows were inserted" }

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i].code === array2[j].code) {
                if (array1[i] !== array2[j]) {
                    changedRows.push(array1[i])
                }
            }
        }
    }

    //console.log("Changed Rows: ", changedRows)
    return changedRows
}

