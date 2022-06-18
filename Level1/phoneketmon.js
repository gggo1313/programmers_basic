// nums�� ���ϸ��� ��ȣ�� ��� 1���� �迭
// nums�� ���̴� ¦���� �ڿ����̸� ��ü ������ �ݱ��� ���ϸ��� ������ �� ����
// ������ �� �ִ� ���ϸ� ���� ������ �ִ밪�� return

// �ߺ��� ��ȣ�� ���� ����
// nums.length/2�� ����ũ�� ��ȣ ������ ��
// nums.length/2�� ũ�� ����ũ�� ��ȣ������ �ִ밪���� return
// ����ũ�� ��ȣ ������ ������ nums.length/2�� �ִ밪���� return

function solution(nums) {
    const kindOfPhonketmon = Array.from(new Set(nums)).length;
    const numOfTake = nums.length / 2;

    return numOfTake < kindOfPhonketmon ? numOfTake : kindOfPhonketmon;
}

const arr1 = [3, 1, 2, 3];
const arr2 = [3, 3, 3, 2, 2, 4];
const arr3 = [3, 3, 3, 2, 2, 2];

console.log(solution(arr1));
console.log(solution(arr2));
console.log(solution(arr3));