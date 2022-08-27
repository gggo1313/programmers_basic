// ��ݵǴ� ���������� ���� ���� ������� �迭 survey�� �־���
// �� ���׿� ���� �亯 �迭 choices�� �־���
// ��� ���� ������ �����̸� ���������� ���� ���ڰ� ��ǥ
// ���������� ���ڿ��� return
function solution (survey, choices) {
    const types = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0};
    let answer = "";

    for (let i = 0; i < choices.length; i++) {
        const [left , right] = survey[i].split("");
        const score = Math.abs(choices[i] - 4);
        if (choices[i] < 4) {
            types[left] += score;
        } else if (choices[i] > 4) {
            types[right] += score;
        };
    };

    const type = Object.keys(types);

    for (let i = 0; i < type.length; i += 2) {
        const leftType = types[type[i]];
        const rightType = types[type[i + 1]];
        
        if (leftType >= rightType) {
            answer += type[i];
        } else {
            answer += type[i + 1];
        };
    };

    return answer;
};

const survey1 = ["AN", "CF", "MJ", "RT", "NA"];
const survey2 = ["TR", "RT", "TR"];
const choices1 = [5, 3, 2, 7, 5];
const choices2 = [7, 1, 3];

console.log(solution(survey1, choices1));