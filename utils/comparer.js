const difference = require('array-difference')

exports.getNewEntries = (array1, array2) => {
    const newEntries = difference(array1, array2)
    return newEntries
}

