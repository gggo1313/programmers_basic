// 세로의 길이가 2이고 가로의 길이가 n인 바닥에 타일 배치
// 타일은 2 * 1 크기
// 경우의 수를 1,000,000,007로 나눈 나머지를 return
function solution (n) {
    let n_1 = 1;
    let n_2 = 2;

    if (n === 1) return n_1;
    if (n === 2) return n_2;

    for (let i = 3; i <= n; i++) {
        let temp = n_1;
        n_1 = n_2;
        n_2 = (temp + n_1) % 1000000007;
    };

    return n_2;
};

console.log(solution(4));

// 다른 사람 코드
// 피보나치를 재귀함수로 표현
function tiling(n) {
    return n < 3 ? n : (tiling(n - 1) + tiling(n - 2)) % 1000000007;
};