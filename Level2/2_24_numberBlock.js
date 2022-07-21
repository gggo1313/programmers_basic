// ��� ��ȣ n�� n * 2 ���� n�� ����� �ش��ϴ� ��Ͽ� �ش� ����� ����
// �ٸ� ����� �־��ٸ� ���� ����
// ����� ���̴� 10 ^ 9�̰� ��� ��ȣ�� 10 ^ 7���� ����
// ������ ��Ÿ���� �� �� begin, end�� �־��� �� 
// �ش� ������ ����ִ� ����� ���� �迭�� return
function solution (begin, end) {
    const answer = new Array(end - begin + 1).fill(0);

    for (let i = begin; i <= end; i++) {
        answer[i - begin] = getMaxDivisor(i);
    };
    
    // begin�� 1�� ��� 0���� �� ����
    if (begin === 1) answer[0] = 0;

    return answer;
};

const getMaxDivisor = (n) => {
    // �Ҽ� ã�� ������� sqrt(n)������ ����� ã�Ƽ� �ݴ� ���(n / i)�� return
    // �Ҽ��� ��� 1�� return
    // 1�� ������ �ּ� ����� ���� ���� 10^7���� ũ�� �� ��
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0 && n / i <= 10 ** 7) {
            return n / i;
        };
    };

    return 1;
};

console.log(solution(1, 10));