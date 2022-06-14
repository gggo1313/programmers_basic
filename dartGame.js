// 3�� ������ ��Ʈ ����
// ������ 0 ~ 10���� ����
// ������ �� S(^1), D(^2), T(^3)���� ����
// ������ �� ��Ÿ��(*)�̳� ������(#)�� ȿ���� ���� �� ����
// ��Ÿ���� ���� ������ �̹� ���� 2��, �������� �̹� ���� (-1)��
// ��Ÿ��� �������� ȿ���� ���������� ��÷�� �� ����
// �Է� ���� ��) "1S2D*3T"

function solution (dartResult) {
    const answer = [];
    let temp = 0;

    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <=9) {
            if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
                temp = 10;
                i++;
            } else {
                temp = Number(dartResult[i]);
            };
        } else if (dartResult[i] === "S") {
            answer.push(temp);
        } else if (dartResult[i] === "D") {
            answer.push(Math.pow(temp, 2));
        } else if (dartResult[i] === "T") {
            answer.push(Math.pow(temp, 3));
        } else if (dartResult[i] === "*") {
            answer[answer.length - 1] *= 2;
            if (answer.length > 1) {
                answer[answer.length - 2] *= 2;
            }             
        } else if (dartResult[i] === "#") {
            answer[answer.length - 1] *= (-1);
        }
    }
    console.log(answer);

    return answer.reduce((prev, cur) => prev + cur);
};

const arr1 = "1S2D*3T";
const arr2 = "1D2S#10S";
const arr3 = "1D2S0T";
const arr4 = "1S*2T*3S";
const arr5 = "1D#2S*3S";
const arr6 = "1T2D3D#";
const arr7 = "1D2S3T*";

console.log("1. ", solution(arr1));
console.log("2. ", solution(arr2));
console.log("3. ", solution(arr3));
console.log("4. ", solution(arr4));
console.log("5. ", solution(arr5));
console.log("6. ", solution(arr6));
console.log("7. ", solution(arr7));