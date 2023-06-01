//                                                          TEST1


//1
//выведите в консоли значение name через точку
let str1 = '{name: "Alex", age: 24}'

console.log(JSON.parse(str1).name)

//2
//выведите в консоли значение name через квадратные скопки
let str2 = '{name: "Alex", age: 24}'
console.log(JSON.parse(str1)["name"])

//3
//как называется обьект находящийся в JSON?
//  object


//                                                          TEST2


//1
//в чем + стрелочных функций?
//  если там одна переменая то можно убрать скобки, если там только return, то также можно убрать квадратные скобки вместе с return

//2
//превратите функцию ниже в стрелочную
function newUser(name, age) {
    if (age > 18) {
        console.log(`${name} ты стар`);
    } else {
        console.log(`${name} ты не дорос`);
    }
}

const newUserArrow = (name, age) => {
    age > 18 ? console.log(`${name} ты стар`) : console.log(`${name} ты не дорос`)
}

//3
//сделай скрипт ниже короче
let call = (a, b) => {return a + b};

let callShort = (a, b) => a + b


//                                                          TEST3


//1
//как называется вид функции
function showMessage(параметры) {
    //код
}

//  обычная функция

//2
//как называется вид функции
let showMessage = function(параметры) {
    //код
}

//  функциональное выражение

//3
//как называется вид функции
let showMessage = (параметры) => {
    //код
}

//  стрелочная функция

//4
//создайте функцию которая выводит в консоли текст 'Запуск' и вызовите функцию
function start() {
    console.log('start')
}
start()

//5
//создайте функцию которая в качестве пареметров принимает 'a' и 'b' и возвращает сумму полученных параметров
let aPlusB = (a, b) => a + b

//6
//конвертируйте функцию ниже в функциональное вырожение
function sum(text='text', age=24) {
    return `${text} ${age}`;
}
let sum = function(text='text', age=24) {
    return `${text} ${age}`;
}

let sum = function(text='text', age=24){
    return `${text} ${age}`;
}

//7
//создайте функцию с помощью конструктора которая в качестве параметра принимает 'a', 'b' и возвращает сумму полученных параметров
function sum(a, b) {
    this.a = a
    this.b = b
    return this.a + this.b
}

//8
//можно ли вызвать функцию до ее обьявления?
//  да, можно

//9
//создайте самовызывающуюся функцию которая выводит в консоли слово 'Запуск'
(function start() {
    console.log('start')
}())

//10
//что такое arguments в функциях?
function sum(text, age) {
    console.log(arguments);
}


sum('text', 24);

//  выводит значения параметров

//11
//выведите в консоли обьект с параметрами из функции
function sum(text, age) {
    //код
    const paramsObject = new Object()
    paramsObject.text = text
    paramsObject.age = age
    console.log(paramsObject)
}

sum('text', 24);

//12
//задайте параметру text значение 'some text' по умолчанию
function sum(text = 'some text', age) {
    //код
}

sum('text', 24);

//13
//вызовите функцию ниже
function sum(text, age, job) {
    //код
}
sum('text', 11, 'progremist')

//14
//вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью call()
const person = {
    firstFunc: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person1 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}
person.firstFunc().call(person1)

//15
//вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью apply()
const person2 = {
    firstFunc: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person3 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}

person2.firstFunc.apply(person3)

//16
//какой из методов может принять массив параметров
call()
apply()

//17
//с помощью какого метода можно вывести максимально большое число из списка
//1, 2, 3
//  Math.max(числа)

//18
//с помощью какого метода можно вывести максимально большое число из массива
//[1, 2, 4]
//  Math.max.apply(массив) Math.max(...массив)

//19
//с помощью какого метода можно вывести самое маленькое число из списка
//1, 2, 3
//  Math.min(числа)

//20
//с помощью какого метода можно вывести маленькое число из массива
//[1, 2, 4]
//  Math.min.apply(массив) Math.min(...массив)