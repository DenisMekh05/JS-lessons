//1
//  в том что если там одна строка return, то код можно писать вот так:
const myFunc = () => `hello world`
//2
// function newUser(name, age) {
//     if (age > 18) {
//         console.log(`${name} ты стар`);
//     } else {
//         console.log(`${name} ты не дорос`);
//     }
// }

const newUser = (name, age) => {age >=   18 ? `${name} ты стар` : `${name} ты не дорос`}

//3
//  let call = (a, b) => {return a + b};
let call = (a, b) => a + b