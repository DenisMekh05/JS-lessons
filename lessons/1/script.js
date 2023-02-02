// 1)

let bookPrice = 8; // цена одной книги
let bookAmount = 55; // кол-во книг
console.log("общая стоимость книг на складe:");
console.log(bookPrice * bookAmount);
// 2)

let bookPrice2 = 18; // цена одной книги
let bookAmount2 = 18; // кол-во книг
console.log("общая стоимость книг на складe:");
console.log(bookPrice2 * bookAmount2);
// 3)

// В каком году вы родились, укажите свой год рождения в переменной "a",затем нажмите Ctrl + Alt + N
let year = prompt('What year did you born?');
alert('You lived', (2022 - year) * 365 ,'days');