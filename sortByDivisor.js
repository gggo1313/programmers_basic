// array�� �� element �� divisor�� ������ �������� ���� 
// ������������ ������ �迭�� return
// divisor�� ������ �������� element�� ���ٸ� [-1]�� return

function solution (arr, divisor) {
    const filtered = arr.filter((element) => {
        return element % divisor === 0;
        });

    if (filtered.length === 0) return [-1];

    return filtered.sort((a, b) => a - b);
    // �׳� sort �ϸ� 5���� 10�� �������� ��Ÿ��
    // �����ϴ� ��Ҹ� ���ڿ��� ��� (5 > 1)
};

const arr1 = [5, 9, 7, 10];
const arr2 = [2, 36, 10, 3];
const arr3 = [3, 2, 6];

console.log(solution(arr1, 5));
console.log(solution(arr2, 1));
console.log(solution(arr3, 10));

// �ٸ� ��� Ǯ��
// map�� ����ϴ� ���
// arr.map(fn): �Լ��� �޾� Ư�� ����� �����ϰ� ���ο� �迭�� ��ȯ
function solution2 (arr, divisor) {
    var answer = [];
    arr.map((o) => {
        o % divisor === 0 && answer.push(o);
    });

    return answer.length ? answer.sort((a, b) => a - b) : [-1];
};