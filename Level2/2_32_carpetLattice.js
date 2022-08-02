// ���簢���� �׵θ����� ���� ����, �� ���� ��� ����
// ������ ���̴� ������ ���̺��� ���� ����
// ���� ������ �� brown, ��� ������ �� yellow�� �Ű������� �־��� ��
// ī���� ����, ���� ũ�⸦ ������� �迭�� ��� return
function solution (brown, yellow) {
    const divisorPair = [];

    // ��ü ���̸� ����
    let area = brown + yellow;
    
    // ��ü ������ ������� ����
    for (let i = 3; i <= Math.sqrt(area); i++) {
        if (area % i === 0) divisorPair.push([area / i - 2, i - 2]);
    };
    
    // �� �� �߿��� ���� ���� ���� -2�� �� �� ���� ���� yellow�� return
    for (pair of divisorPair) {
        if (pair[0] * pair[1] === yellow) return [pair[0] + 2, pair[1] + 2];
    };
};

console.log(solution(8, 1));
console.log(solution(10, 2));
console.log(solution(24, 24));