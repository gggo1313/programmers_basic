// ������ 3���� ���� ��� ����� ����
// ������1: 1, 2, 3, 4, 5 �ݺ� (5�� ����)
// ������2: 2, 1, 2, 3, 2, 4, 2, 5 �ݺ� (8�� ����)
// ������3: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 �ݺ� (10�� ����)
// ���� �迭�� �־����� ��, ���� ������ ���� ����� �迭�� ��� return
// �ش� ����� ���� ���� ��� �������� �����Ͽ� return

function solution(answers) {
    const answer = [];

    // ��� �Է� ����
    const supo1 = [1, 2, 3, 4, 5];
    const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // ���� ���� Ƚ��
    const score = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if(supo1[i % supo1.length] === answers[i]) {
            score[0]++;
            console.log("supo1: ", score[0]);
        }
        if(supo2[i % supo2.length] === answers[i]) {
            score[1]++;
            console.log("supo2: ", score[1]);
        }
        if(supo3[i % supo3.length] === answers[i]) {
            score[2]++;
            console.log("supo3: ", score[2]);
        }
    };

    // �ְ����� ����� ������� �迭�Ͽ� return
    const max_score = Math.max(...score);
    for (let j = 0; j < score.length; j++) {
        if(score[j] === max_score) {
            answer.push(j + 1);
        }
    };

    console.log(answer);
    return answer;
}

const ans1 = [1, 2, 3, 4, 5]
const ans2 = [1, 3, 2, 4, 2]

solution(ans1);
solution(ans2);

// �ٸ� ��� ���
function solution2 (answers) {
    const answer = [];

    const supo1 = [1, 2, 3, 4, 5];
    const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const score1 = answers.filter((a, i) => a === supo1[i % supo1.length]).length;
    const score2 = answers.filter((a, i) => a === supo2[i % supo2.length]).length;
    const score3 = answers.filter((a, i) => a === supo3[i % supo3.length]).length;
    const max_score = Math.max(score1, score2, score3);

    if (score1 === max_score) {answer.push(1)};
    if (score2 === max_score) {answer.push(2)};
    if (score3 === max_score) {answer.push(3)};

    return answer;
}