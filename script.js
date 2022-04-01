'use strict';

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

const weeks = document.querySelector('.week');
const date = new Date();
const todayDay = date.getDay() - 1;

for (let i = 0; i < 7; i++) {
    if (i < 5 && i != todayDay) {
        weeks.innerHTML += `${week[i]}<br>`;
    }
    if (i > 4) {
        weeks.innerHTML += `<b>${week[i]}</b><br>`;
    }

    if (i === todayDay) {
        weeks.innerHTML += `<i>${week[i]}</i><br>`;
    }

}