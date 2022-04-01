'use strict';

let arr = ['22', '37', '400', '311', '49', '81', '247'];

for (let i = 0; i < 7; i++) {
    if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
        console.log(arr[i]);
    }
}
let num;
for (let i = 2; i <= 100; i++) {
    let simple = 1;
    for (let j = 2;
        (j <= i / 2) && (simple == 1); j = j + 1) {
        if (i % j == 0) {
            simple = 0;
        }
    }
    if (simple == 1) {
        console.log('простое: ' + i + ' ' + ' Делители этого числа: 1 и ' + i);
        num += 'простое: ' + i + ' ' + ' Делители этого числа: 1 и ' + i + '<br>';
    }
}