// ���̰� n�̰� ������ "���ڼ��ڼ�..."�� ���ڿ��� return

function solution (n) {
    let answer = '';

    for (let i = 0; i < n; i++) {
        answer += i % 2 ? "��" : "��";
    };

    return answer;
};

console.log(solution(7));

// �ٸ� ��� Ǯ��
const waterMelon = n => "����".repeat(n).slice(0, n);