const btn = document.querySelector('.btn')
const changingButton = document.querySelector(`.changing-button`)
const mainContent = document.querySelector(`.main-content`)
function addComputer() {
    mainContent.innerHTML += `<div class="card">
    <img src="/img/computer.webp" alt="error">
    <div class="card-info">
        <h2>Asus</h2>
        <p>Describtion</p>
        <p>4000$</p>
        <button>Add to card</button>
    </div>
    </div>`
}
function changeColor1() {
    changingButton.style.background = 'blue'
}
function changeColor2() {
    changingButton.style.background = 'green'
}

btn.addEventListener('click', addComputer)
changingButton.addEventListener('mousedown', changeColor1)
changingButton.addEventListener('mouseup', changeColor2)