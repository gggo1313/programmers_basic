//  두 정수 a, b가 주어짐
// 두 정수 사이에 속한(두 정수 포함) 모든 정수의 합을 return

function solution (a, b) {
    return (a + b) * (Math.abs(a - b) + 1) / 2;
};

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));