// ������ ���̰� 2�̰� ������ ���̰� n�� �ٴڿ� Ÿ�� ��ġ
// Ÿ���� 2 * 1 ũ��
// ����� ���� 1,000,000,007�� ���� �������� return
function solution (n) {
    let n_1 = 1;
    let n_2 = 2;

    if (n === 1) return n_1;
    if (n === 2) return n_2;

    for (let i = 3; i <= n; i++) {
        let temp = n_1;
        n_1 = n_2;
        n_2 = (temp + n_1) % 1000000007;
    };

    return n_2;
};

console.log(solution(4));

// �ٸ� ��� �ڵ�
// �Ǻ���ġ�� ����Լ��� ǥ��
function tiling(n) {
    return n < 3 ? n : (tiling(n - 1) + tiling(n - 2)) % 1000000007;
};