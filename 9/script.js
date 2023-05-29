//1
console.log('sort');
//2
let arr2 = [5, 7, 4, 1];
arr1.sort((a, b) => a - b);
//3
let arr3 = [5, 7, 4, 1];
arr2.sort((a, b) => a - b);
arr2.sort((a, b) => a - b).reverse;
//4
let arr4 = [5, 47, 4, 1];
function compareNum(a,b){
    return a - b;
}
arr3.sort(compareNum);
//5
let arr5 = [5, 47, 4, 1];
arr5,sort(function(a,b){return 0.5 - Math.random()});
//6
let arr6 = [5, 47, 4, 1];
function myArrayMax(arr){
    return Math.max.apply(null, arr);
}
arr6.sort(myArrayMax);
//7
let arr7 = [5, 47, 4, 1];
function myArrayMax(arr){
    return Math.min.apply(null, arr);
}
arr7.sort(myArrayMax);
//8
const obj3 = [
    person1 = {
        name: 'Denis',
        surname: 'Mekhbalieff',
        age: '11'
    },
    person2 = {
        name: 'Andrey',
        surname: 'Petrovich',
        age: '15'
    },
    obj3 = {
        name: 'Kenan',
        surname: 'Ivanov',
        age: '9'
    }
];