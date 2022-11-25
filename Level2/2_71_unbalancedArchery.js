// ����ġ�� �� ȭ���� ���� �迭 info
// ����ġ�� �� ȭ���� �� n
// ���̾��� ����ġ���� �� ���� ȭ���� ���� �ش� ������ ȹ��
// ���� ū �������� �̱�� ����� return
// ���� ���� ū �������� �̱�� ����� ���� ����� ���� ���� ������ �� ���� ���� ��츦 return
// ���� ���� ������ ���� ������ ���ٸ� �� �������� ���� ������ �� ���� ���� ��츦 return


// ���̾��� ���ߴ� ������ ȭ�� �� ���� ��밪�� �̿��� ���Ϸ� ������
// �׽�Ʈ ���̽� �����Ͽ� DFS�� �ٽ� �ۼ�
const solution = (n, info) => {
    const answer = new Array(11).fill(0);

    let apeachScore = 0;

    info.forEach((v, i) => {
        let score = v > 0 ? 10 - i : 0;
        apeachScore += score;
    });

    let ryanScore = 0;
    const expectScore = new Map();
    let left = n;

    info.reverse().forEach((v, i) => {
        expectScore.set(i, v + 1);
    });

    const sortedExpectScore = new Map([...expectScore].sort((a, b) => {
        // ���̾��� ������ �ּҹ߻� Ƚ�� ��밪�� ������������ ����
        // ����ġ�� ���� ������ ��밪 2��
        const expectA = a[1] > 1 ? 2 * a[0] / a[1] : a[0] / a[1];
        const expectB = b[1] > 1 ? 2 * b[0] / b[1] : b[0] / b[1];
        return expectB - expectA;
    }));
    // console.log(sortedExpectScore);

    for (let expect of sortedExpectScore) {
        if (left - expect[1] < 0) continue;
        if (left === 0) break;

        left -= expect[1];
        answer[10 - expect[0]] = expect[1];
        ryanScore += expect[0];
        if (expect[1] > 1) apeachScore -= expect[0];
    };

    if (left > 0) answer[10] = left;
    console.log("Apeach: ", apeachScore, "Lion: ", ryanScore);

    return ryanScore > apeachScore ? answer : [-1];
};

const solution2 = (n, info) => {
    let answer = new Array(11).fill(0);
    let max = 0;

    const shot = (apeachScore, ryanScore, count, idx, scoreBoard) => {
        if (n < count) return;

        if (idx > 10) {
            let scoreDiff = ryanScore - apeachScore;

            if (max < scoreDiff) {
                max = scoreDiff
                scoreBoard[10] = n - count;
                answer = scoreBoard;
            };

            return;
        };

        if (n > count) {
            let candidate = [...scoreBoard];
            candidate[10 - idx] = info[10 - idx] + 1;
            shot(apeachScore, ryanScore + idx, count + info[10 - idx] + 1, idx + 1, candidate);
        };

        if (info[10 - idx] > 0) {
            shot(apeachScore + idx, ryanScore, count, idx + 1, scoreBoard);
        } else {
            shot(apeachScore, ryanScore, count, idx + 1, scoreBoard);
        };
    };

    shot(0, 0, 0, 0, answer);

    return max > 0 ? answer : [-1];
};

const info1 = [2,1,1,1,0,0,0,0,0,0,0];
const info2 = [1,0,0,0,0,0,0,0,0,0,0];
const info3 = [0,0,1,2,0,1,1,1,1,1,1];
const info4 = [0,0,0,0,0,0,0,0,3,4,3];

console.log(solution2(5, info1));
console.log(solution2(1, info2));
console.log(solution2(9, info3));
console.log(solution2(10, info4));

