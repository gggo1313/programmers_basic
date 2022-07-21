// 각 배열 A, B에서 하나의 숫자를 뽑아 두 수를 곱함
// 한 번 뽑은 숫자는 다시 뽑을 수 없음
// 모든 곱의 합의 최소값을 return
function solution (A, B) {
    let answer = 0;

    // 하나는 오름차순, 하나는 내림차순으로 정렬
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    for (let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    };

    return answer;
};

let A1 = [1, 4, 2];
let B1 = [5, 4, 4];
let A2 = [1, 2];
let B2 = [3, 4];

console.log(solution(A1, B1));
console.log(solution(A2, B2));

// 다른 사람 풀이
function solution2 (A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    return A.reduce((total, val, idx) => total + val * B[idx], 0);
};