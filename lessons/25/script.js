//                                                          tests

//1
//создайте класс user с конструктором

class user {
    constructor (name, surname) {
        this.name = name
        this.surname = surname
    }
}

//2
class User {
    constructor(name, id) {
        this.name = name
        this.id = id
    }
    talk() {
        console.log(`i can talk`)
    }
}

//3
//создайте 2 обьекта user1, user2 используя ранее созданный класс User

const user1 = new user('Denis', 'Mekhbalieff')
const user2 = new user('Axmed', 'Bayramov')

//4
//добавьте в класс user из второго теста метод talk
//метод talk должен выводить в консоли 'I can talk' сообщение при вызове
//создайте обьект user3 используя класс User
//запустите метод talk ранее добавленный в класс User для обьекта user3
const user3 = new User(`Axmed`, `1`)

//                                                          tasks

function isSymetrical(number) {
    const number2 = number
    String(number)
    number.split('')
    number.sort((a, b) => a + b)
    return number
}

function hashPlusCount(array) {
    let hashes = new Array()
    let pluses = new Array()
    for (let i of array) { 
        if (i == `#`) hashes.push(i)
        if (i == `+`) pluses.push(i)
    }
    let counter = new Array()
    counter.push(hashes.length)
    counter.push(pluses.length)
    return counter
}

function societyName(array) {
    // не смог
}

function reverseCase(string) {
    //не смог
}

function isValid(string) {
    string.split(``)
    if(string.includes(/a-z/i) || string.includes(` `)) {
        return false
    }
    if (string.length <= 5) {
        return true
    }
}