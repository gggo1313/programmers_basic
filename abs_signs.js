// 절대값을 차례대로 담은 정수 배열 absolutes
// 이 정수들의 부호를 차례대로 담은 불리언 배열 signs
// 실제 정수들의 합을 구하여 return

function solution (absolutes, signs) {
    const sumOfAbs = absolutes.reduce((prev, cur) => prev + cur, 0);

    const sumOfPositive = absolutes
        .reduce((prev, cur, idx) => prev + cur * signs[idx], 0);
    // [sumOfNegative] = sumOfAbs = sumOfPositive
    console.log(sumOfAbs, sumOfPositive)

    return sumOfPositive - (sumOfAbs - sumOfPositive);
};

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));

// 다른 사람 풀이
// signs의 true, false를 삼항연산에 사용
function solution2 (absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (sign[i] ? 1 : -1)), 0)
};