// 0 ~ 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers
// numbers에 없는 숫자를 모두 더한 수를 return
// numbers에는 중복된 값이 없음

function solution (numbers) {
    let answer = 45; // 0 ~ 9까지의 합

    const sumOfNumbers = numbers.reduce((prev, cur) => prev + cur, 0);

    return answer - sumOfNumbers;
};

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));