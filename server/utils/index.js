/** 
 * return false if nothing is inside 
 * tocheck is the key
 * tocheckval is the value tocheck will be
 * */
function getItems(tocheck, tocheckval, arrays) {
    const arrayFiltered = arrays.filter(array => array[tocheck] == tocheckval)
    if(arrayFiltered.length > 0)
        return arrayFiltered
    return false
}

module.exports = {
    getItems
}