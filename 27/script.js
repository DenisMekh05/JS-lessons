//                                                          TEST


//1
const emptyObject1 = Object()
const emptyObject2 = {}
const emptyObject3 = new Object()

//2
const user = {
    name: `Denis`,
    age: 11
}

//3
// Alex

//4
// name

//5
const User = {
    name: `Samuil`,
    birth: `04/05/1998`,
    age: 24,
    winner: `Mister Future`,
    rewards: [
        `High Math`,
        `High Math`
    ],
    hobby: `Reading and Programing`
}

//6
let obj = {
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

console.log(obj.name)

//7
console.log(obj.age)

//8
console.log(obj.isMarried)

//9
console.log(obj.children[0])

//10
for (let i of obj.children) {
    console.log(i)
}

//11
console.log(obj.awards.itMaster)

//12
for (let i in obj) {
    console.log(i)
}

//13
for (let i in obj) {
    console.log(obj[`${i}`])
}

//14
obj.children[0] = `Linda`

//15
obj.job = `Manager`

//16
console.log(obj["awards"]["isMaster"])

//17
console.log(obj["name"])

//18
delete obj.job
obj.hasJob = false

//19
delete obj.name

//20
delete obj["job"]
obj["hasJob"] = false


//                                                          TASKS


function formatPhoneNumber(array) {
    let array1 = new Array()
    let array2 = new Array()
    let array3 = new Array()
    for (let i in array) {
        if (i < 3) {
            array1.push(array[i])
        } else if (i < 6) {
            array2.push(array[i])
        } else if (i < 10) {
            array3.push(array[i])
        }
    }
    return `(${array1.join(``)}) ${array2.join(``)}-${array3.join(``)}`
}

function sayHelloBye(name, number) {
    if (number == 1) {
        return `Hello, ${name}`
    } else if (number == 0) {
        return `Bye, ${name}`
    }
}

function isSymetrical(number) {
    number = String(number)
    number = number.split()
    let number1 = [...number]
    number = number.reverse()
    if (number1 == number) {
        return true
    } else {
        return false
    }
}

function chatRoomStatus(array) {
    if (array.length == 0) {
        return `nobody online`
    } else if (array.length == 1) {
        return `${array[0]} is online`
    } else if (array.length == 2) {
        return `${array[0]} and ${array[1]} are online`
    } else if (array.length > 2) {
        return `${array[0]}, ${array[1]} and ${array.length - 2} more people are online`
    }
}

function countTrue(array) {
    let counter = 0
    for (let i of array) {
        if (i) { 
            counter ++
        }
    }
    return counter
}