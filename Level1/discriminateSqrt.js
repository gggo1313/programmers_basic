// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단
// n이 양의 정수 x의 제곱이라면 x + 1의 제곱을 return
// 아니라면 -1을 return

function solution (n) {
    // 루트 씌운거를 내림해서 루트 씌운거랑 비교했을 때 같지 않으면 x의 제곱 아님
    // 같다면 루트 씌운거 + 1의 제곱하여 return
    return Math.sqrt(n) == Math.floor(Math.sqrt(n)) ? Math.pow((Math.sqrt(n) + 1), 2) : -1;
};

console.log(solution(121));
console.log(solution(3));

// 다른 사람 풀이
// 루트 씌운 것의 정수 판정으로 판별
function solution2 (n) {
    return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}

console.log(solution2(121));
console.log(solution2(3));