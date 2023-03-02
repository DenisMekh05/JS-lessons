let array = [ 'ananas', 'apple', 'banana', 'mango']
for (i of array) {
    console.log(i)
}
for (i of array){
    if (i == 'banana') {
        continue
    }
    console.log(i)
}
let array2 = [ 1, 23, 22, 54, 13, 2 ]
for (i of array2){
    if ((i % 2) >= 1) {
        continue
    }
    console.log(i)
}
let array3 = [ 1, 2, 3, 4 ]
let number = 0
for (i in array3) {
    number += array3[i]
    if (array3.length - i == 1) {
        console.log(number)
    }
}