'use strict'

function one() {
    let attempts = 10;

    return function two(compNum) {
        console.log(compNum);
        const userNum = +prompt("Введите число");
        if (attempts == 0) {
            if (prompt("У вас больше нет попыток. Хотите начать заново?")) {
                number(Math.floor(Math.random() * 101));
            } else {
                return;
            }
        }

        if (isNaN(userNum) || userNum == '') {
            alert('Введите число!');
            two(compNum);
        } else if (!userNum) {
            return
        }

        if (userNum != compNum) {
            moves--;
            if (compNum < userNum) {
                alert(`Загаданное число меньше! У вас осталось ${attempts} ходов`);
                two(compNum);
            } else if (compNum > userNum) {
                alert(`Загаданное число больше! У вас осталось ${attempts} ходов`);
                two(compNum);
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