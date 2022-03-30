let arr = ['22', '37', '400', '311', '49', '81', '247'];

for (let i = 0; i < 7; i++) {
    if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
        console.log(arr[i]);
    }
}

let num = 100;

nextNum:
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextNum;
        }
        console.log(i);
    }