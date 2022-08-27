// 상반되는 성격유형을 가진 문제 순서대로 배열 survey가 주어짐
// 각 문항에 대한 답변 배열 choices가 주어짐
// 상반 유형 점수가 동점이면 사전순으로 빠른 문자가 대표
// 성격유형을 문자열로 return
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