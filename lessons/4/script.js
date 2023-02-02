//1
const emptyObject = undefined;
//2
const person = {
    name: 'Denis',
    surname: 'Mekhbalieff',
    isMarried: false,
    age: 11,
    growth: 1.65 + 'cm',
    weight: 41 + 'kg'
};
//3
const user = {
    name: 'Alex',
    age: 23,
    isMarried: true,
    childs: ['Marry', 'Luchy']
};
//4
console.log('типы переменных: числа, строка, true-false');
//5
console.log('name: ' + user.name);
//6
console.log('age: ' + user.age);
//7
console.log('child: ' + user.childs[1]);
//8
user.bag={
    money: 200 + '$',
    cart: 'Master Cart'
}
console.log('money: ' + user.bag.money);
//9
user.name = 'Sam';
//10
user.bag.money = 300 + '$';
//11
user.childs[0] = 'Lara';
//12
delete user.bag;
//13
user.work = 'progremer';
