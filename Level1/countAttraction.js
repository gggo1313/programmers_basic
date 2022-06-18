// ���̱ⱸ�� N�� Ż ������ ����� N��� �þ
// ���̱ⱸ �̿��(price), �����ݾ�(money), Ÿ�� ���� Ƚ��(count)�� �־����� ��
// ���� �� ���ڶ������ return
// �������� ������ 0�� return

function solution (price, money, count) {
    const total_price = price * count * (count + 1) / 2;

    return money > total_price ? 0 : total_price - money;
};

console.log(solution(3, 20, 4));

// �ٸ� ��� Ǯ��
// ���Խ�
const solution = (..._) => Math.max(_[0] * _[2] * ++_[2] / 2 - _[1], 0);
// (..._) : solution �Լ��� ������ �Ű������� ���
// _[0] �Ű����� ����� �迭���� index 0��°
// ++_[2] �� _[2]�� ���� ���� +1 �ϰ� ���
// Math.max(total_price - money, 0)���� ���� ������ �ִ밪 ���� ������� ��ü
