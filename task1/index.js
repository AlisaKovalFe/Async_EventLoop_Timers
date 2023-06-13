// Написать функцию, которая выводит в консоль числа от from до to с интервалом в 2 секунды.

// мой код
function print(from, to) {
    console.log(from++);
    if (from > to) return

    setTimeout(print, 2000, from, to)
}

// setTimeout(print, 0, 1, 5)

//код из учебника (рекурсивный таймаут)
function print(from, to) {
    let curentNumber = from

    setTimeout(function go() {
        console.log(curentNumber);

        if (curentNumber < to) {
            setTimeout(go, 2000)
        }
        curentNumber++
    }, 0)
}

// print(1, 5)


//из учебника тайм интервал
function print(from, to) {
    let currentNumber = from

    let timerId = setInterval(function () {
        console.log(currentNumber);
        currentNumber++

        if (currentNumber > to) clearInterval(timerId)
    }, 2000)
}

// print(1, 5)

function printNumbers(from, to) {
    let current = from;

    function go() {
        console.log(current);
        if (current == to) clearInterval(timerId);
        current++;
    }

    go();
    let timerId = setInterval(go, 1000);
}

printNumbers(1, 5);