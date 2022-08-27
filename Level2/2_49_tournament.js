// ��ʸ�Ʈ���� A ��°�� ��ġ�� ������ B��°�� ��ġ�� ����
// �� ������ �� ���忡�� �������� return
function solution (n, a, b) {
    let answer = 1;
    let max = 0;

    while (n > 1) {
        n = n / 2;
        max++;
    };

    for (let i = 0; i < max; i++) {
        const ref = 2 ** (i + 1);

        if (parseInt((a - 1) / ref) === parseInt((b - 1) / ref)) break;

        answer++;
    };

    return answer;
};

console.log(solution(8, 4, 7));

// �ٸ� ��� Ǯ��
// n�� ���� �ʰ� �ٷ� ���
function solution2 (n, a, b) {
    let answer = 0;
    
    while (a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    };

    return answer;
};