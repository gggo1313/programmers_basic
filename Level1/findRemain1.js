// 자연수 n이 매개변수
// n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return
// 3 <= n <= 1,000,000

function solution (n) {
    let answer = 0;
    for(i = 1; i < n; i++) {
        if (n%i == 1) {
            answer = i;
            break;
        };
    };
    return answer;
};

console.log(solution(10));
console.log(solution(12));