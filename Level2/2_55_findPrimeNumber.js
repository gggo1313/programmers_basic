// 양의 정수 n을 k 진수로 바꿨을 때, 변환된 수 안에 아래 조건에 맞는 소수 개수를 return
// 0을 기준으로 좌 혹은 우에 있는 수(0을 포함할 수 없음)
function solution(n, k) {
    const list = n.toString(k).split("0");
    const prime = list.filter((v) => isPrime(+v));

    return prime.length;
};

function isPrime(num) {
    if(num === 1) {
        return false;
    } else if(num === 2) {
        return true;
    } else if(num % 2 === 0) {
        return false;
    } else {
        for (let i = 3; i <= num ** 0.5; i += 2) {
            if(num % i === 0) {
                return false;
            };
        };

        return true;
    };
};

console.log(solution(437674, 3));
console.log(solution(110011, 10));