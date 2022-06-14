// ���̰� ���� �� 1���� ���� �迭 a, b�� ������ return

function solution (a, b) {
    let answer = 0;

    for (let i = 0; i < a.length; i++) {
        answer += a[i] * b[i];
    };

    return answer;
};

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
console.log(solution([-1, 0, 1], [1, 0, -1]));

// �ٸ� ��� Ǯ��
// reduce ���

function solution2 (a, b) {
    var answer = a.reduce((acc, cur, idx) => acc += cur * b[idx], 0);
    return answer;
};

console.log(solution2([1, 2, 3, 4], [-3, -1, 0, 2]));
console.log(solution2([-1, 0, 1], [1, 0, -1]));