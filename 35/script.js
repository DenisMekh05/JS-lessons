//1
//выведите в консоли ширину и высоту окна браузера с помощью window
console.log(innerHeight)
console.log(innerWidth)

//2
//создайте обработчик события для кнопки ниже, которая будет открывать новое окно в браузере при нажатии
//<button id='open'>Open</button>
document.querySelector('#open').addEventListener('click', () => window.open())

//3
//создайте обработчик события для кнопки ниже, которая будет закрывать текущее окно в браузере при нажатии
//<button id='close'>Open</button>
document.querySelector('#close').addEventListener('click', () => window.close())

//4
//создайте обработчик события для кнопки ниже, которая будет перемещать текущее окно в браузере при нажатии
//<button id='move'>Open</button>
document.querySelector('#move').addEventListener('click', () => window.moveTo(0, 0))

//5
//создайте обработчик события для кнопки ниже, которая будет менять размер текущего окно в браузере при нажатии
//<button id='remove'>Open</button>
document.querySelector('#remove').addEventListener('click', () => window.resizeTo(100, 100))

//6
//выведите в консоли ширину экрана пользователя в пикселях
console.log(window.screen.width)

//7
//выведите в консоли высоту экрана пользователя в пикселях
console.log(window.screen.height)

//8
//выведите в консоли ширину экрана пользователя без панели задач и интерфейса вкладок в пикселях
console.log(window.screen.availWidth)

//9
//выведите в консоли высоту экрана пользователя без панели задач и интерфейса вкладок в пикселях
console.log(window.screen.availHeight)

//10
//выведите в консоли сколько битов использует браузер пользователя
console.log(window.parseInt)

//11
//выведите в консоли глубину экрана пользователя в пикселях
console.log(window.screen.pixelDepth)

//12
//создайте обработчик события для кнопки ниже, которая будет перекидывать на предыдущую страницу в браузере при нажатии
//<button id='back'>Open</button>
document.querySelector('#back').addEventListener('click', () => window.history.back())

//13
//создайте обработчик события для кнопки ниже, которая будет перекидывать на следующую страницу в браузере при нажатии
//<button id='next'>Open</button>
document.querySelector('#back').addEventListener('click', () => window.history.forward())

//14
//с помощью какого свойства можно проверить включены ли у пользователя куки
console.log(window.cookieEnabled())

//15
//с помощью какого свойства можно проверить как называется имя приложения в браузере пользователя
console.log(window.navigator.appCodeName)

//16
//с помощью какого свойства можно проверить как называется имя браузера пользователя
console.log(window.navigator.product)

//17
//с помощью какого свойства можно проверить какая версия у браузера пользователя
console.log(window.navigator.appVersion)

//18
//с помощью какого свойства можно отправить заголовок браузера на сервер
console.log(window.navigator.userAgent)

//19
//с помощью какого свойства можно узнать операционную систему пользователя
console.log(window.navigator.platform)

//20
//с помощью какого свойства можно узнать язык браузера пользователя
console.log(window.navigator.language)

//21
//с помощью какого свойства можно узнать находится в данный момент пользователь в сети или нет
console.log(window.navigator.onLine)

//22
//с помощью какого свойства можно проверить включен ли java у пользователя
console.log(window.navigator.javaEnabled())