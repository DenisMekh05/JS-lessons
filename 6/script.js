//1
let text1 = 'My name is Alexander';
text1 = text1.toUpperCase();
//2
let text2 = text1.toUpperCase()
text2 = text2.toLowerCase();
//3
let a3 = 'Hello '
let b3 = 'my friend'
console.log(a3 + b3);
//4
let text4 = 'My name is Alexander';
text4 = text4.split();
//5
let text5 = 'My name is Alexander';
text5 = text5.split('');
//6
let text6 = 'My,name,is,Alexander'
text6 = text6.split(',');
//7
let text7 = 'My name is Alexander';
text7 = text7.split(' name is Alexander');
delete text7[1]
//8
let pancake8 = 'Oreo'
console.log(pancake8.repeat(3));
//9
let text9 = 'My name is Alexander';
console.log(text9[0])
//10
let text10 = 'My name is Alexander';
console.log(text9.includes('name'));
//11
let text11 = 'My name is Alexander';
console.log(text9.includes('name',10))
//12
let text12 = 'My name is Alexander';
console.log(text12.indexOf('a'));
//13
let text13 = 'My name is Alexander';
console.log(text13.indexOf('a',5));
//14
let text14 = 'My name is Alexander';
console.log(text14.endsWith('der'));
//15
let text15 = 'My name is Alexander';
console.log(text14.startsWith('na', 3));
//16
let text16 = 'My name is Alexander';
console.log(text16.slice(8,10));
//17
let text17 = 'My name is Alexander';
console.log(text17.slice(3,10));
//18
let text18 = 'My name is Alexander';
console.log(text18.slice(-3,-10));
//19
let text19 = 'My name is Alexander';
console.log(text19.substring(8,10));