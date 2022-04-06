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
        const week = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
        ];

        const month = [
            'Января',
            'Февраля',
            'Марта',
            'Апреля',
            'Майа',
            'Июня',
            'Июля',
            'Августа',
            'Сентября',
            'Октября',
            'Ноября',
            'Декабря',
        ];

        function dateAndTime(value) {
            if (value < 10) {
                value = '0' + value;
            }
            return value;
        }
        const d = new Date();
        const n = d.getDay();
        const mon = d.getMonth();
        const days = d.getDay();
        const years = d.getFullYear();
        const hours = dateAndTime(d.getHours());
        const minutes = dateAndTime(d.getMinutes());
        const seconds = dateAndTime(d.getSeconds());

        return `Сегодня ${week[n]}, ${days} ${month[mon]} ${years} года, ${hours} ${(hours == 1 || (hours > 19 && hours % 10 == 1)) ? 'час' :
        ((hours > 1 && hours < 5) || (hours > 19 && hours % 10 > 1 && hours % 10 < 5)) ? 'часа' : 'часов'} ${minutes} минут ${seconds} секунд `;

    }
    document.getElementById('fullTime').innerHTML = time();
}, 1000);