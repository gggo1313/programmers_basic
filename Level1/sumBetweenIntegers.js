//  �� ���� a, b�� �־���
// �� ���� ���̿� ����(�� ���� ����) ��� ������ ���� return

function solution (a, b) {
    return (a + b) * (Math.abs(a - b) + 1) / 2;
};

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));