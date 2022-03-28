'use strict';

const num = 266219;

const spl = num.toString().split('').reduce((a, b) => a * b);

const kub = spl ** 3;

const sliceStr = String(kub).slice(0, 2);

console.log(sliceStr);