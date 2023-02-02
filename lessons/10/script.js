//1
let arr1 = [45, 12, 3, 2, 1, 35];
function myFunc1(item) {
    console.log(arr1[item]);
}
arr1.forEach(myFunc1);
//2
let arr2 = [45, 46, 47];
function myFunc2(item) {
    return arr2[item * 2];
}
let arr22 = arr2.map(myFunc2);
console.log(arr22);
//3
let arr3 = [45, 12, 3, 2, 1, 35];
function myFunc3(a) {
    return a > 5;
}
let arr32 = arr3.filter(myFunc3);
console.log(arr32);
//4
let arr4 = [45, 12, 3, 2, 1, 35];
function myFunc4(total, item) {
    return total + item;
}
console.log(arr4.reduce(myFunc4));
//5
let arr5 = [45, 12, 3, 2, 1, 35];
function myFunc5(item) {
    return item + 50;
};
console.log(arr5.reduce(myFunc5));
//6, 7
let arr6 = [45, 12, 3, 2, 1, 35];
function myFunc6(item) {
    return item > 5;
}
let arr62 = arr6.filter(myFunc6);
console.log(arr62);
//8
let arr8 = ['banana', 'apple', 'mango', 'apple'];
console.log(arr8.indexOf('apple'));
//9
let arr9 = ['banana', 'apple', 'mango', 'apple'];
console.log(arr8.lastIndexOf('apple'));
//10
let arr10 = ['banana', 'apple', 'mango', 'apple'];
console.log(arr10.includes('apple'));
//11
let arr11 = [1, 3, 4, 9, 0, 20];
function myFunc11(item) {
    return item > 5;
}
console.log(arr11.find(myFunc11));
//12
let arr12 = [1, 3, 4, 9, 0, 20];
console.log(arr11.findIndex(myFunc11));
//13
let arr13 = 'hello'
let arr132 = Array.from(arr13)
console.log(arr132);
//14
let arr14 = ['apple', 'banana',]
let keys = arr14.keys();
for(let i of keys){
    console.log(i);
};