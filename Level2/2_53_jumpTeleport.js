// K ĭ�� �����ϸ� K��ŭ �������� ���
// ������� �� �Ÿ��� 2�踸ŭ�� ��ġ�� �����̵� ����(������ ���X)
// N��ŭ ������ �Ÿ��� ���� ��� �߿��� �ּ� ������ ��뷮�� return

function solution (n) {
    let count = 0;

    while (n > 0) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n--;
            count++;
        };
    };

    return count;
};

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));