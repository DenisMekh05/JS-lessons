//                                                          TEST1


//1
//что выведет в консоли функция call
const person = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

//  Alex = 24  

//2
//получите доступ к методу call и запустите его
const person2 = {
    name: 'Alex',
    age: 24,
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

person.call()

//3
//выведите в консоли все ключи из обьекта с помощью for
const person3 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

for (let i in person3) {
    console.log(i)
}

//4
//выведите в консоли все значения из обьекта с помощью for
const person4 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}
for (let i in person4) {
    console.log(person[`${i}`])
}

//5
//преобразуйте обьект ниже в массив
const person5 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

let person5ToArray = new Array()

for (let i in person5) {
    person5ToArray.push(person5[`${i}`])
}

//6
//преобразуйте обьект ниже в строку
const person6 = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function() {
        console.log(`${this.name} = ${this.age}`);
    }
}

JSON.stringify(person6)

//7
//преобразуйте обьект ниже в конструктор функции
let obj7 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}



function Person(){
    this.name = 'Alex'
    this.age = 24
    this.isMarried = false
    this.hasCar = false
    this.hasJob = true
    this.job = 'programmer'
    this.childs = ['Hanz', "Marry"]
    this.awards = {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

//8
//перечисли встроенные конструкторы javascript

//  date, number, string, promise, array, object

//9
//создайте новый обьект используя конструктор ниже
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

let personConstructor = new Person('Alex', 25, 'Programist')


//                                                          TEST2


//1 
//создайте пустой обьект 3мя способами
let a = {}
let b = Object.create()
let c = new Object()

//2
//создайте обьект с вашими персональными данными 
//пример: 
let obj2 = {
    name: 'Alex',
    age: 24
}

const person20 = {
    name: 'Denis',
    surname: 'Mekhbalieff',
    age: 11
}

//3
//чем является name в обьекте ниже?
let obj3 = {
    name: 'Alex',
    age: 24
}

//  ключ

//4
//чем является 'Alex' в обьекте ниже?
let obj4 = {
    name: 'Alex',
    age: 24
}

//  значение

//5
//создайте пустой обьект и добавте в него данные о человеке из тekста ниже в виде ключ/значения
/*
Здравствуйте меня зовут Самуил. Я родился 4 мая 1998го года. Мне 24 года.
Я вышел победителем в конкурсе Мистер Будующее.
У меня 2 награды по высшей математике.
Я люблю много читать и много программировать.
*/

const person50 = {
    name: 'Samuil',
    birth: '04.05.1998',
    age: 24,
    winner: 'Mister Future',
    awards: [
        'High math',
        'High math'
    ],
    hobby: 'Reading and programing'
}

//6
//выведите в консоли значение name из обьекта
let obj6 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(obj6.name)

//7
//выведите в консоли значение age из обьекта
let obj70 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(obj7.age)

//8
//выведите в консоли значение isMarried из обьекта
let obj8 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(obj8.isMarried)

//9
//выведите в консоли имя первого ребенка из обьекта
let obj9 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    children: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(obj9.children[0])

//10
//выведите в консоли имена всех детей с помощью for из обьекта
let obj10 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

for (let i in obj10.childs) {
    console.log(childs[i])
}

//11
//выведите в консоли значение itMaster из обьекта
let obj11 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(obj6.awards.itMaster)

//12
//выведите в консоли все свойства с помощью for...in из обьекта
let obj12 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

for (let i in obj12) {
    console.log(i)
}

//13
//выведите в консоли значение всех свойств с помощью for...in из обьекта
let obj13 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

for (let i in obj12) {
    console.log(obj13[`${i}`])
}

//14
//поменяйте имя дочери на 'Linda' в обьекте ниже
let obj14 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

obj14.childs[1] = 'Linda'

//15
//поменяйте значение 'job' на 'menedjer' в обьекте ниже
let obj15 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

obj15.job = 'menedjer'

//16
//выведите в консоли значение itMaster из обьекта c помощью квадратных скобок
let obj16 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(obj16["awards"]["itMaster"])

//17
//выведите в консоли значение name из обьекта c помощью квадратных скобок
let obj17 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

console.log(obj17["name"])

//18
//удалите job из обьекта и поменяйте значение hasJob на 'false'
let obj18 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

delete obj18.job
obj18.hasJob = false

//19
//удалите name из обьекта
let obj19 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

delete obj19.name

//20
//удалите job из обьекта c помощью квадратных скобок и поменяйте значение hasJob на 'false'
let obj20 = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

delete obj20["job"]
obj20["hasJob"] = false


//                                                          TEST3


//1
//что такое JSON?

//2
//зачем использовать JSON?  

//3
//преобразуйте строку ниже в обьект JSON и выведите в консоли
let str = '{name: "Alex", age: 24}';
JSON.parse(str)

//4
//преобразуйте обьект ниже в строку и выведите в консоли
let obj = {name: "Alex", age: 24};
JSON.stringify(obj)

//5
//создайте в отдельности 2 переменные и присвойте одному обьект JSON другому обьект Javascript
let obj500 = {
    name: "Denis",
    surname: "Mekhbalieff",
    age: 11
}
let JSON500 = JSON.stringify(obj500)

//6
//какие типы данных может содержать JSON обьект?
//  string, boolean, number, array, object

//7
//какие типы данных не может содержать обьект?
//  function, data, undefined, comment

//8
//в каком виде мы получаем JSON с сервера?
//  строка

//9
//в каком виде мы отправляем JSON на сервер?
//  строка