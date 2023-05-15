//1
//создайте новый элемент и добавьте его в блок ниже с помощью append
//<div id='block'></div>

document.querySelector('#block').appendChild('<h1></h1>')

//2
//создайте новый элемент и добавьте его в блок ниже с помощью insertBefore
//<div id='block'></div>
let h1 = document.createElement('h1')
h1.insertBefore(document.querySelector('#block'))

//3
//удалите тег 'p' из скрипта ниже с помощью DOM метода
//<div id='block'>
//    <p>Some text</p>
//</div>
document.removeChild(document.querySelector('p'))

//4
//замените тег 'p' на <i>Hello World</i>
//<div id='block'>
//    <p>Some text</p>
//</div>
const div = document.querySelector('div')
const p = document.querySelector('p')
const i = document.querySelector('i')

div.appendChild(i)
div.removeChild(p)
i.innerHTML = 'Hello World'
//5
//выведите в консоли коллекцию всех элементов с классом .block
console.log(document.querySelectorAll('.block'))

//6
//выведите в консоли первый элемент из ранее созданной коллекции
console.log(document.querySelectorAll('block')[0])

//7
//выведите в консоли количество элементов в ранее созданной коллекции
console.log(document.querySelectorAll('block').length)

//8
//в чем разница между nodeList и HtmlCollection
//  NodeList может хранить любой тип элементов, а HTML Collection только элементы HTML