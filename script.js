let arr = [2, 45, 47, 55, 27, 33, 22];

arr.forEach(em => {
    if (String(em).search(/(2|4)/) === 0) console.log(em);
});

let num = 100;

nextNum:
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextNum;
        }
        console.log(i);
    }