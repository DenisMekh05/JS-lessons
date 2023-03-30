function potato(string) {
    return string.match(/potato/ig).length
}

function charCount(letter, string) {
    const regExp = new RegExp(letter, `\g`)
    return string.match(regExp).length
}

function numberSplit(number) {
    let array = new Array()
    if (number % 2 == 0) {
        array.push(number / 2)
        array.push(number / 2)
    } else {
        let number2 =(number - 1) / 2
        array.push(number2)
        array.push(number - number2)
    }
}

function filterArray(array) {
    const regExp = new RegExp(`[a-z]` , `\g`)
    return array.delete(regExp)
}

function isTrue(param) {
    return Boolean(param)
}