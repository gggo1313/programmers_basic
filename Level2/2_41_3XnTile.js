// 3 X n�� �ٴ��� 2 X 1�� Ÿ�Ϸ� ä����� ��
// n�� �־����� �� ä�� �� �ִ� ����� ���� return
function solution (n) {
    if (n % 2 === 1) return o;
    // 1. (n - 2) * 3����
    // 2. (n - 4) * 2����
    // n = 2�� �� 3����
    // n = 4�� �� 11����
    const MOD = 1000000007;
    const arr = [3, 11];
    
    if (n === 2) {
        return 3;
    } else if (n === 4) {
        return 11;
    } else {
        for (let i = 2; i < n / 2; i++) {
            arr[i] = arr[i - 1] * 3 + 2;

            for (let j = 0; j < i - 1; j++) {
                arr[i] += arr[j] * 2;
            };

            arr[i] %= MOD;
        };
    };

    return arr[arr.length - 1];
};

const idx = 8 >> 1;
console.log(solution(6))