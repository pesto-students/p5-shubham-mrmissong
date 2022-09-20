function hasDuplicate(arr) {
    const container = new Set()
    for (let number of arr) {
        if (container.has(number)) {
            return true
        }
        else {
            container.add(number)
        }
    }
    return false
}
console.log(hasDuplicate([4, 6, 7, 5, 8])) //will return false since all values are different
console.log(hasDuplicate([4, 6, 7, 5, 8, 4])) //will return true because 4 has been added twice