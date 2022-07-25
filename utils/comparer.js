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

    if (len1 != len2) return { status: false, message: "Array number is not equal" }


}

