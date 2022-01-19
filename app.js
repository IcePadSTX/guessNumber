'use strict'

function one() {
    let moves = 10;

    return function two(secretNumber) {
        console.log(secretNumber);
        const userNumber = +prompt("Введите число");
        if (moves == 0) {
            if (prompt("У вас уже нет свободных ходов. Хотите сыграть ещё?")) {
                number(Math.floor(Math.random() * 101));
            } else {
                return;
            }
        }

        if (isNaN(userNumber) || userNumber == '') {
            alert('Введите число!');
            two(secretNumber);
        } else if (!userNumber) {
            return
        }

        if (userNumber != secretNumber) {
            moves--;
            if (secretNumber < userNumber) {
                alert(`Загаданное число меньше! У вас осталось ${moves} ходов`);
                two(secretNumber);
            } else if (secretNumber > userNumber) {
                alert(`Загаданное число больше! У вас осталось ${moves} ходов`);
                two(secretNumber);
            }
        } else {
            prompt('Вы победили!!! Хотите сыграть ещё?');
            return
        }
    }

    // two();
}

const number = one();
number(Math.floor(Math.random() * 101));