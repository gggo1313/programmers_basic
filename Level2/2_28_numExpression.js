// 주어진 자연수 n을 연속하는 자연수의 합으로 표현하는 방법의 수를 return
function solution (n) {
    // 모든 수가 자기 자신 1개로 표현
    let answer = 1;

    // 시작 숫자는 n/2까지
    for (let i = 1; i <= n / 2; i++) {
        let sum = 0;
        let num = i;
        // 시작 숫자부터 다음 숫자를 차례대로 더함
        while (sum <= n) {
            sum += num;

            if (sum === n) {
                answer++;
                break;
            };

            num++;
        };
    };

    return answer;
};

console.log(solution(15));

// 다른 사람 풀이
// 수학으로 풀음
// n의 약수 중 홀수 약수의 개수가 answer
function expressions (num) {
    let answer = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i == 0 && i % 2 == 1) answer++;
    };

    return answer;
};