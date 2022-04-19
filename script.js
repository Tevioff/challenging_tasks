'use strict';
let timer;
const render = () => {
	const date = new Date();

	const hours = date.getHours()
	const greeting = (hours >= 6 && hours < 12) ? 'Доброе утро!' :
		(hours >= 12 && hours < 18) ? 'Добрый день!' :
		(hours >= 18 && hours < 24) ? 'Добрый вечер!' : 'Доброй ночи!';

	const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	const weekDay = `Сегодня: ${week[date.getDay()]}`;

	const time = `Текущее время: ${date.toLocaleTimeString('en')}`;

	const newYear = new Date('1 january 2023')

	const daysUntilNewYear = `До нового года осталось ${Math.ceil((newYear - date) / 1000 / 60 / 60 / 24)} дней`;
	document.body.innerHTML = `<p>${greeting} <hr> ${weekDay} <br> ${time} <br> ${daysUntilNewYear}</p>`
	if (newYear - date <= 0) {
		clearInterval(timer);
	}
};

timer = setInterval(render, 1000);