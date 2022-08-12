// n X n �迭�� ����
// [0, 0]���� [i, i]������ ���� ���� ��� �� ĭ�� ���� i�� ä��
// �迭 ���� ��� ���Ҹ� �̾� ����
// [left] ~ [right] �� return
function solution (n, left, right) {
    const answer = [];

    for (let i = left; i <= right; i++) {
        let row = Math.floor(i /n);
        let col = i % n;

        answer.push(row > col ? row + 1 : col + 1);
    };

    return answer;
};

console.log(solution(3, 2, 5))
console.log(solution(4, 7, 14))

// �ٸ� ��� Ǯ��
function solution2 (n, left, right) {
    const answer = [];

    for (let i = left; i <= right; i++) {
        answer.push(Math.max(i % n, parseInt(i / n)) + 1);
    };

    return answer;
};

console.log(solution2(4, 7, 14))