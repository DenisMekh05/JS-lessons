const btn = document.querySelector('.btn')
const changingButton = document.querySelector(`.changing-button`)
const mainContent = document.querySelector(`.main-content`)

function addComputer() {
    for (let computer of computers) {
        mainContent.innerHTML += `<div class="card">
        <img src="/img/computer.webp" alt="error">
        <div class="card-info">
            <h2>${computer.make}</h2>
            <p>${computer.description}</p>
            <p>${computer.price}</p>
            <button class="changing-button">Add to card</button>
        </div>`
    }
}
const computers = [
    {
        make: 'Asus',
        price: 1500,
        description: `description`
    },
    {
        make: 'Acer',
        price: 1700,
        description: `description`
    },
    {
        make: 'Asus',
        price: 2000,
        description: `description`
    },
]



function changeColor1() {
    changingButton.style.background = 'blue'
}
function changeColor2() {
    changingButton.style.background = 'green'
}


changingButton.addEventListener('mousedown', changeColor1)
changingButton.addEventListener('mouseup', changeColor2)