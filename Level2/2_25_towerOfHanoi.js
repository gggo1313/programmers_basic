// ó������ ��տ� ������ ���� ���� ���� �ֵ��� �׿� ����
// ū ������ ���� ���� ���� ���� �� ����
// 1�� ��տ� �ִ� n���� ������ 3�� ������� �ű�� �ּ� ����� return
function solution (n) {
    dp (n, 1, 3, 2);

    return arr;
};

const arr = [];

function dp (n, src, dst, mid) {
    if (n === 1) {
        arr.push([src, dst]);
    } else {
        // n-1 ���� ������ 1���� 2�� �ű�� ���
        dp(n - 1, src, mid, dst);
        // 1�� �ִ� n �� ������ 1���� 3���� �ű�
        arr.push([src, dst]);
        // n-1 ���� ������ 2���� 3���� �ű�� ���
        dp(n - 1, mid, dst, src);
    };
};

console.log(solution(5));