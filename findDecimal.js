// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 return

function solution (n) {
    let answer = n;

    for (i = 4; i <= n; i++) {
        for (j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
            // 속도 및 효율성 문제로 에라토스테네스의 체 사용
            // (n이하의 정수는 n <= m^2을 만족하는 가장 작은 정수 m의 
            // 배수가 아니라면 소수이다.)
            if (i % j == 0) {
                answer -= 1;
                console.log("i: ", i, "j: ", j);
                break;
            };
        };
    };

    return answer - 1;
};

console.log(solution(10));
console.log(solution(5));
// console.log(solution(987654));

// 다른 사람 풀이
// 에라토스테네스의 체를 코드로 그대로 구현
function solution2 (n) {
    const s = new Set();
    // 2를 제외한 모든 짝수와 1을 제거
    for(let i = 1; i <= n; i += 2) {
        s.add(i);
    }

    s.delete(1);
    s.add(2);

    console.log(typeof s);

    // n <= j^2
    for (let j = 3; j <= Math.sqrt(n); j += 2) {
        if (s.has(j)) {
            // j의 배수를 모두 제거
            for (let k = j * 2; k <= n; k += j) {
                s.delete(k);
            };
        };
    };

    return s.size;
};

console.log(solution2(987654));