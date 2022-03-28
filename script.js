'use strict';
const lang = 'ru';
if (lang === 'ru') {
    console.log(
        'Понедельник, Вторник, Среда, Четврег, Пятница, Суббота, Воскрение'
    );
} else {
    console.log(
        'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'
    );
}

switch (lang) {
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четврег, Пятница, Суббота, Воскрение');
        break;
}

const en = ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'];
const ru = ['Понедельник, Вторник, Среда, Четврег, Пятница, Суббота, Воскрение'];
console.log(ru);

const namePerson = 'Артём';
namePerson === 'Артём' 
? console.log('директор') 
: namePerson === 'Александр' 
? console.log('предподаватель') 
: console.log('студент');
