let date = new Date()
//1
console.log(date)
//2
console.log(date.getFullYear() + date.getMonth() + date.getDay())
//3
console.log(date.getFullYear() + date.getMonth() + date.getDay() + date.getHours())
//4
console.log(date.getFullYear() + date.getMonth() + date.getDay() + date.getHours() + date.getMinutes())
//5
console.log(date.getFullYear() + date.getMonth() + date.getDay() + date.getHours() + date.getMinutes() + date.getSeconds())
//6
console.log(date.toISOString())
//7
console.log(date.toUTCString())