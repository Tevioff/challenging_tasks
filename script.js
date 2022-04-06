'use strict';

setInterval(() => {
    function datenAndTime(value) {
        if (value < 10) {
            value = '0' + value;
        }
        return value;
    }

    function dateTime() {
        const current_datetime = new Date();
        const day = datenAndTime(current_datetime.getDate());
        const month = datenAndTime(current_datetime.getMonth() + 1);
        const year = current_datetime.getFullYear();
        const hours = datenAndTime(current_datetime.getHours());
        const minutes = datenAndTime(current_datetime.getMinutes());
        const seconds = datenAndTime(current_datetime.getSeconds());

        return day + "." + month + "." + year + " - " + hours + ":" + minutes + ":" + seconds;
    }

    document.getElementById('time').innerHTML = dateTime();
}, 1000);

setInterval(() => {
    function time() {
        const options = {
            month: 'long',
            day: 'numeric',
            weekday: 'long',
        };

        const dateAndTime = value => (value < 10) ? `$0{value}` : value;
        const d = new Date();
        const years = d.getFullYear();
        const hours = dateAndTime(d.getHours());
        const minutes = dateAndTime(d.getMinutes());
        const seconds = dateAndTime(d.getSeconds());

        return `Сегодня ${d.toLocaleDateString('ru', options)}, ${years} года, ${hours} ${(hours == 1 || (hours > 19 && hours % 10 == 1)) ? 'час' :
        ((hours > 1 && hours < 5) || (hours > 19 && hours % 10 > 1 && hours % 10 < 5)) ? 'часа' : 'часов'} ${minutes} минут ${seconds} секунд `;
    }
    document.getElementById('fullTime').innerHTML = time();
}, 1000);