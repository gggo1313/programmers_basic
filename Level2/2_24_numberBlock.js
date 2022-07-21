// 블록 번호 n은 n * 2 부터 n의 배수에 해당하는 블록에 해당 블록을 넣음
// 다른 블록이 있었다면 빼고 넣음
// 블록의 길이는 10 ^ 9이고 블록 번호는 10 ^ 7까지 있음
// 구간을 나타내는 두 수 begin, end가 주어질 때 
// 해당 구간에 깔려있는 블록의 숫자 배열을 return
function solution (begin, end) {
    const answer = new Array(end - begin + 1).fill(0);

    for (let i = begin; i <= end; i++) {
        answer[i - begin] = getMaxDivisor(i);
    };
    
    // begin이 1일 경우 0으로 값 변경
    if (begin === 1) answer[0] = 0;

    return answer;
};

const getMaxDivisor = (n) => {
    // 소수 찾는 방법으로 sqrt(n)까지의 약수를 찾아서 반대 약수(n / i)를 return
    // 소수일 경우 1을 return
    // 1을 제외한 최소 약수로 나눈 값이 10^7보다 크면 안 됨
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0 && n / i <= 10 ** 7) {
            return n / i;
        };
    };

    return 1;
};

console.log(solution(1, 10));