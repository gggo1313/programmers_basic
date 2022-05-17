// 수포자 3명이 답을 찍는 방식이 있음
// 수포자1: 1, 2, 3, 4, 5 반복 (5개 단위)
// 수포자2: 2, 1, 2, 3, 2, 4, 2, 5 반복 (8개 단위)
// 수포자3: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 반복 (10개 단위)
// 정답 배열이 주어졌을 때, 가장 점수가 높은 사람을 배열에 담아 return
// 해당 사람이 여러 명일 경우 오름차순 정렬하여 return

function solution(answers) {
    const answer = [];

    // 답안 입력 패턴
    const supo1 = [1, 2, 3, 4, 5];
    const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // 문제 맞힌 횟수
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

    // 최고점인 사람을 순서대로 배열하여 return
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

// 다른 사람 답안
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