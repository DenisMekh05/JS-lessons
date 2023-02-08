function points(num1, num2) {
    return num1 * 2 + num2 * 3
}

function stringName(result) {
    return result + 'Ebadit'
}

function lessThan100(num1, num2) {
    if(num1 + num2 < 100) {
        return true
    }
    else {
        return false
    }
}

function printArray(num) {
    let arr =[]
    for(i = 1; i <= num; i ++) {
        arr.push(i)
    }
    console.log(arr)
}

function animals(hen, cow, sheep) {
    return hen * 2 + cow * 4 + sheep * 4
}