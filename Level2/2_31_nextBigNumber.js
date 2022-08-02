// ���� ū ���ڴ� �� Ŀ�� ��
// ���� ū ���ڴ� 2������ ��ȯ���� �� 1�� ������ ����
// �� �� ���� ���� ���� ���� ū ����
// ���� ū ���ڸ� return
function solution (n) {
    // 2������ 1�� ������ �׻� ���� ���ϴ� ������ ��
    const numOfOne = n.toString(2).split("1").length;

    while (true) {
        n++;
        if (n.toString(2).split("1").length === numOfOne) return n;
    };
};

console.log(solution(78));
console.log(solution(15));

// �ٸ� ��� Ǯ��
// 2�������� 1�� ������ ���� ��
// String���� match�� ���Խ��� �̿��� 1�� ������ ã��
// ����Լ��� ���� ���� �� ������ �Լ��� �ٽ� ����
function solution2 (n, a = n + 1) {
    return n.toString(2).match(/1/g).length === a.toString(2).match(/1/g).length ? a : solution(n, a + 1);
};