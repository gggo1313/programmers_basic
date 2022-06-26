// �� ���� left���� right������ ��� ���� �߿���
// ����� ������ ¦���̸� ���ϰ�, Ȧ���̸� �� ���� return

// �����������̸� ����� Ȧ��
function solution (left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        if (Math.sqrt(i) === Math.floor(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        };
    };

    return answer;
};

console.log(solution(13, 17));
console.log(solution(24, 27));