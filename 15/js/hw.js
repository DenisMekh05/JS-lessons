function makesTen(num1, num2) {
    let bool = 0
    num1 === 10 || num2 === 10 || (num1 + num2) === 10 ? bool = true : bool = false
    return bool
}

function makePair(num1, num2) {
    let arr = [ num1, num2 ]
}

function calculateFuel(num) {
    num * 10 >= 100 ? console.log(num * 10) : console.log(100)
}

const arrowFunc = (num) => {
    return String(num)
}