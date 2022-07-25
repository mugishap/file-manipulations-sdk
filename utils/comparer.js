
exports.comparer = (array1, array2) => {
    let result = []
    array1.forEach(element => {
        let found = false
        array2.forEach(element2 => {
            if (element.code === element2.code) {
                found = true
            }
        }
        )
        if (!found) {
            result.push(element)
        }
    }
    )
    return result
}
