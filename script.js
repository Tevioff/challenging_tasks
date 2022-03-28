'use strict';

const num = 266219;

const splt = num.toString().split('').reduce((a, b) => a * b);

const kube = splt ** 3;

const sliceStr = String(kube).slice(0, 2);

console.log(sliceStr);

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
namePerson === 'Артём' ?
    console.log('директор') :
    namePerson === 'Александр' ?
    console.log('предподаватель') :
    console.log('студент');
