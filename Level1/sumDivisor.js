// ���� n�� �Է¹޾� n�� ����� ��� ���� ���� return

function solution (n) {
    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        if(n % i === 0) {
            sum += i;
        };
    };

    return sum + n;
};

console.log(solution(12));
console.log(solution(17));

// �ٸ� ��� Ǯ��
// ����� �� ���ÿ� ���ϴ� ������� ��귮�� �ٿ���

function solution2 (n) {
    let answer = 0;
    let i;
    for (i = 1; i <= Math.sqrt(n); i++) {
        if (!(n % i)) {
            answer += (i + n / i);
        }
    }
    i--;
    return (i === n / i) ? answer - i : answer;
};