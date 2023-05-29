//                                                          TEST


//1
//что выведет в консоли функция call

const person = {
    name: 'Alex',
    age: 24,
    call: function () {
        console.log(`${this.name} = ${this.age}`);
    }
}
//  Alex = 24


//2
//получите доступ к методу call и запустите его
console.log(person.call())

//3
//выведите в консоли все ключи из обьекта с помощью for

for (let i in person) {
    console.log(i)
}


//4
//выведите в консоли все значения из обьекта с помощью for

for (let i in person) {
    console.log(person[i])
}


//5
//преобразуйте обьект ниже в массив

let objArray = new Array()
for (let i in person) {
    objArray.push(person[i])
}


//6
//преобразуйте обьект ниже в строк

const personJSON = JSON.stringify(person)


//7
//преобразуйте обьект ниже в конструктор функции

let obj = {
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

function Obj(name, age, isMarried, hasCar, hasJob, job, childs, awards) {
    this.name = name
    this.age = age
    this.isMarried = isMarried
    this.hasCar = hasCar
    this.hasJob = hasJob
    this.job = job
    this.childs = childs
    this.awards = awards
}


//8
//перечисли встроенные конструкторы javascript

// new Object new Number new String new Array new Data


//9
//создайте новый обьект используя конструктор ниже

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

const object = new Person(`Andrey`, 21, `egniner`)


//                                                          TASKS


function addNums(string) {
    string = string.split(` `)
    let counter = 0
    for (let i in string) {
        counter += Number(string[i])
    }
    return counter
}

function ifPrefix(word, prefix) {
    let prefixes = [`auto`]
    if (word.includes(prefix) | prefixes.includes(prefix)) {
        return true
    } else {
        return false
    }
}

function isSufix(word, sufix) {
    let sufixes = [`fobby`, `logy`]
    if (word.includes(sufix) | sufixes.includes(sufix)) {
        return true
    } else {
        return false
    }
}

function toArray(object) {
    let array = new Array()
    for (let i in object) {
        array.push([`${i}`, object[i]])
    }
    return array
}

function concat(array) {
    let array1 = new Array()
    for (let i of array) {
        array1.push(...i)
    }
    return array1
}

function count(number) {
    let counter = 0
    number = String(number)
    number = number.split(``)
    for (let i in number) {
        if (!isNaN(number[i])) {
            counter++
        } else if (number[i] == `.`) {
            break
        }
    }
    return counter
}