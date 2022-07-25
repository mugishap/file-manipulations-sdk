
exports.getNewEntries = (array1, array2) => {
    const newElements = []
    array1.forEach(element => {
        if (!array2.includes(element)) {
            newElements.push(element)
        }
    })
}
exports.compareRows = (array1, array2) => {

}
