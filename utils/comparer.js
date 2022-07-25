const difference = require('array-difference')
const { compareObject, compareArray } = require('compare-object-array');


exports.getNewEntries = (array1, array2) => {
    const newElements = difference(array1, array2)
    return newElements
}
exports.compareRows = (array1, array2) => {
    array2.forEach(element => {
        array1.forEach(element2 => {
            if (element.code == element2.code) {
                const result = compareObject(element, object2);
                console.log(result)
                if (result.isUpdated) {
                    if (element.status === "NEW") {
                        element.status(UPDATEDx1)
                    }
                    else{
                        const times = element.status.split("x")
                        const newnumber = times[0]++
                        times.pop()
                        times.push(newnumber)
                        times.join("x")
                        element.status = times

                    }
                }
            }
        })
    });
}
