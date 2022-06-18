// ������ ���� ���� n�� ����, n�� � ���� ���� x�� �������� �ƴ��� �Ǵ�
// n�� ���� ���� x�� �����̶�� x + 1�� ������ return
// �ƴ϶�� -1�� return

function solution (n) {
    // ��Ʈ ����Ÿ� �����ؼ� ��Ʈ ����Ŷ� ������ �� ���� ������ x�� ���� �ƴ�
    // ���ٸ� ��Ʈ ����� + 1�� �����Ͽ� return
    return Math.sqrt(n) == Math.floor(Math.sqrt(n)) ? Math.pow((Math.sqrt(n) + 1), 2) : -1;
};

console.log(solution(121));
console.log(solution(3));

// �ٸ� ��� Ǯ��
// ��Ʈ ���� ���� ���� �������� �Ǻ�
function solution2 (n) {
    return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}

console.log(solution2(121));
console.log(solution2(3));