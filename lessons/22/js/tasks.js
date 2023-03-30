`use strict`


function sumOfCubes(array) {
    let sum = 0
    for (let x of array) {
        sum += x**3
    }
    return sum
}

function sortByLength(array) {
    array = array.sort((a, b) => a.length - b.length)
    return array
}

function getOnlyEvens(array) {
    let array2 = new Array()
    for (let i of array) {
        if (i % 2 == 0) {
            array2.push(i)
        }
    }
    return array2
}

function highestDigit(number) {
    number = String(number)
    number = number.split(``)
    number = number.map(item => Number(item))
    return Math.max(...number)
}

function countVowels(str) {
    str.Split('')
    for (let x of str) {
        
    }
}