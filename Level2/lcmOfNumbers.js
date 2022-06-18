// 배열 arr에 있는 n 개의 수들의 최소공배수를 return
function gcd (a, b) {
    return b ? gcd (b, a % b) : Math.abs(a);
};

function lcm (a, b) {
    return (a * b) / gcd(a, b);
};

function solution (arr) {
    let temp = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            continue;
        };

        temp = lcm(temp, arr[i + 1]);
    };

    const answer = temp;

    return answer;
};

const arr1 = [2, 6, 8, 14];
const arr2 = [1, 2, 3];

console.log(solution(arr1));
console.log(solution(arr2));

// 다른 사람 풀이
// 같은 방법을 더 간단하게
function nlcm(num) {
    return num.reduce((a, b) => a * b / gcd(a, b));
};