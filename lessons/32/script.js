//                                                          TEST


//1
//как расшифровывается DOM?

//  Document Object Model


//2
// для чего нужен DOM?
//  чтобы передать элементы html в джаваскрипт


//3
//измените содержимое тега 'p' на 'Новый текст'
// <p id="txt">Some text</p>
const p = document.querySelector('p')
p.innerHTML = 'новый текст'


//4
//выведите в консоли содержимое тега 'p'
console.log(p)


//5
//получите доступ к элементу с помощью (get...)
//  <div class="master"></div>

const divClassMaster = document.getElementsByClassName('master')


//6
//получите доступ к элементу с помощью (get...)
//  <div id="master"></div>

const divIdMaster = document.getElementById('master')


//7
//получите доступ к элементу с помощью (get...)
//  <div></div>

const divTag1 = document.getElementsByTagName('div')


//8
//получите доступ к элементу с помощью (query...) через имя атрибута
//  <div title="someText"></div>

const divTagQuery = document.querySelector('div')


//9
//получите доступ к элементу с помощью (query...) через имя и значение атрибута
//  <div title="someText"></div>

// не смог


//10
//получите доступ к элементу с помощью (query...) через тег, имя и значение атрибута
//  <div title="someText"></div>

//  не смог


//11
//получите доступ к элементу с помощью (query...) через имя класса
//  <div class="someText"></div>

const divClass = document.querySelector('.someText')


//12
//получите доступ к элементу с помощью (query...) через имя идентификатора
//  <div id="someText"></div>

const divId = document.querySelector('#someText')


//13
//получите доступ к элементу с помощью (query...) через тег
//  <div></div>

const divTag2 = document.querySelector('div')


//14
//измените значение атрибута 'type' на 'number' с помощью DOM метода
//  <input type="text">
document.querySelector('input').type = 'number'


//15
//измените фоновый цвет блока div на красный с помощью DOM метода
//  <div id='block'></div>

document.querySelector('#block').style.backbround = 'red'


//16
//добавьте атрибут 'title' со значением 'message' для блока нижу с помощью DOM метода
//  <div></div>

document.querySelector('div').title = 'message'


//17
//с помощью какого метода DOM можно создать элемент в javascript?
//  createElement


//18
//с помощью какого метода DOM можно удалить элемент в javascript?
//  removeChild


//19
//с помощью какого метода DOM можно добавить элемент в javascript?
//  querySelector


//20
//с помощью какого метода DOM можно заменить элемент в javascript?
//  appendChild


//21
//с помощью какого метода DOM можно записать текст в элемент в javascript?
//  write



//                                                          TASKS

// функция которая ничего не делает
let nothing = 0


function doNothing() {
    nothing ++
}




function ascDesNone(array, value) {
    if (value === /'None'/i) {
        return array
    } else if (value === /'Asc'/i) {
        array.sort((a, b) => a - b)
    } else if (value === /'Des'/i) {
        array.sort((a, b) => b - a)
    }
}

function indexMultiplayer(array) {
    let value = 0
    for (let i in array) {
        value += array[i] * i
    }
    return value
}

function isSpecialArray(array) {
    for (let i in array) {
        if (((array[i] % 2 == 0) & (i % 2 == 0)) && ((array[i] % 2 > 0) & (i % 2 > 0))) {
            doNothing()
        } else {
            return false
        }
        return true
    }
}