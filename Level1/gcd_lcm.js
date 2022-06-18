// 두 수(n, m)를 입력받아 최대공약수와 최소공배수를 return
// return 형식: [gcd, lcm]

// gcd만 빨리 구하면 됨
// 서로소인 경우, gcd가 매우 큰 경우
// 소인수분해

function solution (n, m) {
    let gcd = 1;
    let a = n;
    let b = m;
    const answer = [];
    for (let i = 2; i <= Math.min(n, m); i++) {
        while (n % i == 0 && m % i == 0) {
            n = n / i;
            m = m / i;
            gcd *= i;
            // console.log("n: ", n, "m: ", m, "gcd: ", gcd);
        }
    }
    const lcm = gcd * n * m;
    answer.push(gcd, lcm);
    // console.log(answer);

    return answer;
};

solution(3, 12);
solution(24, 36);

// 다른 사람 답변

// 유클리드 호제법 활용
// gcd(a, b) = gcd(b, a % b)

function gcdlcm(a, b) {
    let r;
    for ( var ab = a * b; r = a % b; a = b, b = r) {} 
    // b = 0 이 되면 0으로 나눌 수가 없으므로 break
    console.log(b, ab / b);
    return [b, ab / b];
}

gcdlcm(78696, 19332);

// 재귀함수 + 유클리드 호제법 활용
function gcd(a, b) {
    return b ? gcd(b, a % b) : Math.abs(a)
};
function lcm(a, b) {
    return (a * b) / gcd(a, b)
};
function gcdlcm2(a, b) {
    const answer = [gcd(a, b), lcm(a, b)];
    return answer;
};

gcdlcm2(78696, 19332);