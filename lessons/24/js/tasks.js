function sortByLength(array) {
    array = array.sort((a, b) => a.length - b.length)
    return array
}

function getAbsSum(array) {
    let sum = 0
    for (let x of array) {
        if (x > 0) {
            sum += x
        } else if(x < 0) {
            sum -= x
        }
    }
    return sum
}

const emotify = string => {
    if (string.includes('smile')) string.replace(/`smile`/i, `:)`)
    if (string.includes('laugh')) string.replace(/`laugh`/i, `:D`)
    if (string.includes('sad')) string.replace(/`sad`/i, `:(`)
}

const mean = array => {
    let x = 0
    for (var i of array) {
        i += i
    }
    i = i/array.length
    return i
}

const test = array => {
    let x = new Array()
    for (let i of array) {
        if(!x.includes(i)) {
            x.push(i)
        }
    }
    return x
}