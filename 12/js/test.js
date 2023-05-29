let date = new Date()
//1
console.log(date.getFullYear())
//2
console.log(date.getMonth())
//3
console.log(date.getHours())
//4
console.log(date.getMinutes())
//5
console.log(date.getSeconds())
//6
console.log(date.getMilliseconds())
//7
let dateSetYear = date.setFullYear(2030)
console.log(dateSetYear.getFullYear())
//8
let dateSetHours = date.setHours(12)
console.log(dateSetHours.getHours())
//9
let dateSetMinutes = date.setMinutes(30)
console.log(dateSetMinutes.getMinutes())
//10
let dateSetMonth = date.setMonth(2)
console.log(dateSetMonth.getMonth())
//11
let dateSetSeconds = date.setSeconds(40)
console.log(dateSetSeconds.getSeconds())
//12
let dateSetMiliseconds = date.setMilliseconds(400)
console.log(dateSetMiliseconds.getMiliseconds())