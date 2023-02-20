let i = 0
//1
let arr1 = ['q','w','r','t'];
for(let i = 0; i <= 3; i ++) {
    console.log(arr1[i])
}
//2
let arr2 = ['q','w','r','t'];
for(let i = 0; i <= 3; i ++) {
    console.log(i)
}
//3
let arr3 = ['q','w','r','t'];
for(i of arr3) {
    console.log(i)
}
//4
let arr4 = ['q','w','r','t'];
for(i in arr3) {
    console.log(i)
}
//5
let arr5 = ['q','w','r','t'];
function myFunc5() {
    for(i of arr5) {
        console.log(i)
    }
}
arr5.forEach(myFunc5)
//6
let arr6 = ['q','w','r','t'];
function myFunc6() {
    for(i in arr5) {
        console.log(i)
    }
}
arr6.forEach(myFunc6)
//7
let arr7 = ['q','w','r','t'];
function myFunc7() {
    for(let i = 0; i <= 5; i ++) {
        console.log(`${arr7[i]} ${i}`)
    }
}
arr7.forEach(myFunc7)
//8
let text8 = 'Hello';
while (i <- text8.length) {
    console.log(text8[i])
}
//9
i = 0
let array9 = [ 1, 2, 3, 4 ]
do{
    console.log(array9[i])
    i ++
} while (i <= array9.length)
//10
let arr10 = ['q','w','r','t'];
for (i of arr10) {
    console.log(i)
    if (i == 'r') {
        break
    }
}
//11
let arr11 = ['q','w','r','t'];
for (i of arr11) {
    console.log(i)
    if (i == 't') {
        continue
    }
}