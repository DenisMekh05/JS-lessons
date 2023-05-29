function sum(number) {
    let i = 0
    while (i <= number) {
        i += i + 1
        return i
    }
}
console.log(sum(4))