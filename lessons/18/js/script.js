//button on click color change
const btn = document.querySelector('.btn')
const changingButton = document.querySelector(`.changing-button`)
const mainContent = document.querySelector(`.main-content`)
function addComputer() {
    mainContent.innerHTML += `<div class="card">
    <img src="/img/computer.jpeg" alt="">
    <div class="card-info">
        <h2>Asus</h2>
        <p>Describtion</p>
        <p>4000$</p>
        <button>Add to card</button>
    </div>
    </div>`
}
function changeColor() {
    changingButton.style.background = 'blue'
    console.log('a')
    wait(100)
    changingButton.style.background = 'green'
    console.log('b');
}

btn.addEventListener('click', addComputer)
changingButton.addEventListener('click', changeColor)