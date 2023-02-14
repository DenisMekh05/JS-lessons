//1
true
//2
false
//3
false
//4
true
//5
false
//6
false
//7
false
//8
false
//9
false
//10
false
//11
false
//12
false
//13
//  ==, <, >
//14
false
//15
false
//16
true
//17
let money = 10
if (money >= 5) {
    console.log('Я куплю пирог')
} else if (1 < money < 5) {
    console.log('Мало денег')
} else {
    console.log('Денег нет')
}
//18
let day = new Date().getDay()
switch (day) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    default:
        console.log('Break Time!')
        break;
}
//19
let num = '654765fdfds';

if (/\s/g.test(num) || /[a-zA-Z]/g.test(num)) {
    console.log(false)
}