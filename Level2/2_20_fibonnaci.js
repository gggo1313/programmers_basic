// 2 이상의 n을 입력했을 때 n번째 피보나치수를 1234567로 나눈 나머지를 return



function solution (n) {
    const fibo = [0, 1];

    for (let i = 1; i < n; i++) {
        let leng = fibo.length;
        let next = fibo[leng - 2] + fibo[leng - 1];
        // overflow 고려하여 이 단계에서 1234567로 나눈 나머지를 추가
        fibo.push(next % 1234567); 
    };

    const answer = fibo[n];

    return answer;
};

console.log(solution(5))