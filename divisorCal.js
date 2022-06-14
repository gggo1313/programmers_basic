// 두 정수 left부터 right까지의 모든 수들 중에서
// 약수의 개수가 짝수이면 더하고, 홀수이면 뺀 값을 return

function solution (left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        if (Math.sqrt(i) === Math.floor(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        };
    };

    return answer;
};

console.log(solution(13, 17));
console.log(solution(24, 27));