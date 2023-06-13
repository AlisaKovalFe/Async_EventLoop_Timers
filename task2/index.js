let inputs = document.querySelectorAll('input')
let button = document.querySelector('#button')
let answer = document.querySelector('#answer')


let timerId
let ms = 7000
let message = 'Что-то долго думаете'

document.addEventListener('DOMContentLoaded', (event) => {
    timerId = setTimeout(() => alert(message), 7000)
})

for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', (event) => {
        clearTimeout(timerId)
        timerId = setTimeout(() => alert(message), 7000)
    })
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

button.addEventListener('click', () => {
    clearTimeout(timerId)
    answer.innerHTML = ''
    function print(from, to) {
        let i = from

        function go() {
            try {
                if (Number(inputs[i].value)) {
                    throw new ValidationError('цифры вводить нельзя')
                }
                if (inputs[i].type == 'checkbox' && inputs[i].checked) {
                    inputs[i].value = `Like ${inputs[i].id}`
                } else if (inputs[i].type == 'checkbox' && !inputs[i].checked) {
                    inputs[i].value = `Don't like ${inputs[i].id}`
                }
                if (inputs[i].value == '') {
                    inputs[i].value = 'поле не заполнено'
                    inputs[i].style.color = 'red'
                }

                answer.innerHTML += `<div id="colorOfAnswer">${inputs[i].value}</div>`

                if (i == to) clearInterval(timerId)
                i++

            } catch (err) {
                alert(`${err.name}, ${err.message}`)
            }

        }
        go()
        let timerId = setInterval(go, 2000)
    }

    print(0, inputs.length - 1)

})




