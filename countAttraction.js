// ���̱ⱸ�� N�� Ż ������ ����� N��� �þ
// ���̱ⱸ �̿��(price), �����ݾ�(money), Ÿ�� ���� Ƚ��(count)�� �־����� ��
// ���� �� ���ڶ������ return
// �������� ������ 0�� return

function solution (price, money, count) {
    const total_price = price * count * (count + 1) / 2;

    return money > total_price ? 0 : total_price - money;
};

console.log(solution(3, 20, 4));