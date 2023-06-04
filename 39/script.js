//  добавление HTML тегов
const img = document.querySelector('img')
const comentBox = document.querySelector('.coment-box')

//  массив с именами
const randomUsernames = [
    'James',
    'Jack',
    'Andrew',
    'Ethan',
    'Leo',
    'Daniel',
    'Robert',
    'Katie',
    'Daisy',
    'Vera',
    'Stella',
    'Jacob',
    'Stevie'
]

//  создание индексов, которые будут содержать определенные рандомные числа
let randomResultIndex = 0
let randomComentIndex = 0

//  код Fetch
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(data => data.json())
    .then((result => {
        //  изменение картинки
        setInterval(() => {
            img.src = result[randomResultIndex].url
            randomResultIndex = Math.round(Math.random() * 5000)
        }, 1000)
        //  добавление коментариев
        setInterval(() => {
            comentBox.innerHTML += `<div class="coment">
                                        <h3>${randomUsernames[randomComentIndex]}</h3>
                                        <p id="coment-text">${result[randomResultIndex].title}</p>
                                    </div>`
            randomComentIndex = Math.round(Math.random() * randomUsernames.length)

        }, Math.round((Math.random() * 7000) + 1000))
    }))