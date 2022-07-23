// n���� ������� ���� ���� ����� ���������� ����
// k��°�� ����� return
function solution (n, k) {
    const answer = [];
    // k - 1�� (n - 1)!�� ���� ���� n�� �ε��� 
    let value = k - 1;

    // n���� ������������ �迭 ����
    const arr = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        arr[i] = arr[i - 1] + 1;
    };

    while(arr.length) {
        // k��° ����� ã���� ����
        if (value === 0) {
            answer.push(...arr);
            break;
        };

        // (n - 1)!
        const facto = factorial(arr.length - 1);
        // k - 1�� (n - 1)!�� ���� ��
        const idx = Math.floor(value / facto);
        // value���� (n - 1)!�� ���� �������� value�� ��ü
        value = value % facto;

        // answer�� �� �ش��ϴ� �ε����� ���ڸ� �߰�
        answer.push(arr[idx]);
        // arr���� answer�� �߰��� ���ڸ� ����
        arr.splice(idx, 1);
    };

    return answer;    
};

const factorial = (num) => {
    let result = 1;
    for (let i = 2; i <= num; i++) result *= i;

    return result;
};

console.log(solution(11, 3628801));