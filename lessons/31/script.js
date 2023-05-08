let users = [
    {
        login: 'user017',
        password: '1234'
    },
    {
        login: 'user512',
        password: 'qwerty'
    }
]

const submitLogin = document.querySelector('.submitLogin')
const loginInput = document.querySelector('#login').value
const passwordInput = document.querySelector('#password').value
const error = document.querySelector(`.error`)
const submitRegister = document.querySelector(`.submitRegister`)

submitLogin.addEventListener('click', (e) => {
    e.preventDefault()
    let userAvaiable = users.some((user) => {
        return user.login === loginInput && user.password === passwordInput
    })
    if (userAvaiable) {
        location.href = 'https://www.google.com'
    } else {
        error.style.display = 'block'
        setTimeout(() => {
            error.style.display = 'none'
        }, 1000);
    }
    for (let input of allInputs) {
        input.value = ''
    }
})
function addUser(loginPar, passwordPar) {
    users.push({
        login: loginPar,
        password: passwordPar
    })
}

submitRegister.addEventListener(`click`, addUser(loginInput, passwordInput))