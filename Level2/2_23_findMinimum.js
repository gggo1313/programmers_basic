// �� �迭 A, B���� �ϳ��� ���ڸ� �̾� �� ���� ����
// �� �� ���� ���ڴ� �ٽ� ���� �� ����
// ��� ���� ���� �ּҰ��� return
function solution (A, B) {
    let answer = 0;

    // �ϳ��� ��������, �ϳ��� ������������ ����
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

// �ٸ� ��� Ǯ��
function solution2 (A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    return A.reduce((total, val, idx) => total + val * B[idx], 0);
};