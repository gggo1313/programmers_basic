// �־��� �ڿ��� n�� �����ϴ� �ڿ����� ������ ǥ���ϴ� ����� ���� return
function solution (n) {
    // ��� ���� �ڱ� �ڽ� 1���� ǥ��
    let answer = 1;

    // ���� ���ڴ� n/2����
    for (let i = 1; i <= n / 2; i++) {
        let sum = 0;
        let num = i;
        // ���� ���ں��� ���� ���ڸ� ���ʴ�� ����
        while (sum <= n) {
            sum += num;

            if (sum === n) {
                answer++;
                break;
            };

            num++;
        };
    };

    return answer;
};

console.log(solution(15));

// �ٸ� ��� Ǯ��
// �������� Ǯ��
// n�� ��� �� Ȧ�� ����� ������ answer
function expressions (num) {
    let answer = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i == 0 && i % 2 == 1) answer++;
    };

    return answer;
};