// 정수 n을 입력받아 n의 약수를 모두 더한 값을 return

function solution (n) {
    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        if(n % i === 0) {
            sum += i;
        };
    };

    return sum + n;
};

console.log(solution(12));
console.log(solution(17));

// 다른 사람 풀이
// 약수의 페어를 동시에 더하는 방법으로 계산량을 줄였음

function solution2 (n) {
    let answer = 0;
    let i;
    for (i = 1; i <= Math.sqrt(n); i++) {
        if (!(n % i)) {
            answer += (i + n / i);
        }
    }
    i--;
    return (i === n / i) ? answer - i : answer;
};