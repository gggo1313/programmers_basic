// 1 * 1 격자 정사각형으로 이루어진 가로 W, 세로 H인 사각형
// 대각선으로 잘랐을 때 멀쩡한 정사각형의 개수를 return



function solution (W, H) {
    let gcd = getGCD(W, H);
    let penta = (W + H) / gcd - 1;

    return W * H - penta * gcd;
};

function getGCD (a, b) {
    while (b > 0) {
        let r = a % b;
        a = b;
        b = r;
    };

    return a;
};

console.log(solution(8, 12));