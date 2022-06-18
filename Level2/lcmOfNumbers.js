// �迭 arr�� �ִ� n ���� ������ �ּҰ������ return
function gcd (a, b) {
    return b ? gcd (b, a % b) : Math.abs(a);
};

function lcm (a, b) {
    return (a * b) / gcd(a, b);
};

function solution (arr) {
    let temp = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            continue;
        };

        temp = lcm(temp, arr[i + 1]);
    };

    const answer = temp;

    return answer;
};

const arr1 = [2, 6, 8, 14];
const arr2 = [1, 2, 3];

console.log(solution(arr1));
console.log(solution(arr2));

// �ٸ� ��� Ǯ��
// ���� ����� �� �����ϰ�
function nlcm(num) {
    return num.reduce((a, b) => a * b / gcd(a, b));
};