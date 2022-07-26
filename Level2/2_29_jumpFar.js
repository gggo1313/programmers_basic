// �� ���� �� ĭ �Ǵ� �� ĭ �� �� ����
// n ĭ�� �ٴ� ����� ���� 1234567�� ���� �������� return

function solution (n) {
    // n - 2ĭ���� 2ĭ�� �ٴ� ��� 
    // n - 1ĭ���� 1ĭ�� �ٴ� ���
    // ��ġ�� nĭ�� �ٴ� ���
    const dp = [0, 1, 2];
    
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    };

    return dp[n];
};

console.log(solution(4));