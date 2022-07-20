// 각 심사관이 심사하는데 걸리는 시간을 담은 배열 times
// n 명이 심사관에게 모두 심사 받는데 걸리는 시간의 최소값을 return
function solution (n, times) {
    let left = 1;
    let right = n * Math.max(...times);

    while (left < right) {
        const temp = Math.floor((left + right) / 2);

        const count = times.reduce((acc, cur) => {
            return acc + Math.floor(temp / cur);
        }, 0);

        if (count >= n) {
            right = temp;
        } else {
            left = temp + 1;
        };
    };

    return right;
};