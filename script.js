'use strict';

const num = 266219;

const splt = num.toString().split('').reduce((a, b) => a * b);

const kube = splt ** 3;

const sliceStr = String(kube).slice(0, 2);

console.log(sliceStr);