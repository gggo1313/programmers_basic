// ���� �迭 numbers�� �־���
// numbers�� �ִ� �� ���� ���� �̾� ���ؼ� ���� �� �ִ� ��� ���� 
// �迭�� ������������ ��� return
// ���� ����� �ߺ��� ��� �ϳ��� �迭�� ����

// �ε����� �ٸ� �� ���� �̴´�.
// ��� ����� ���� �����ؾ� �Ѵ�.
// ���� ������� �ߺ��� ���� �����Ѵ�.
// ������������ �����Ѵ�.

function solution (numbers) {
    let temp = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j]);
        }
    }

    const answer = Array.from(new Set(temp));
    answer.sort((a, b) => a - b);

    return answer;
}

const arr1 = [2, 1, 3, 4, 1];
const arr2 = [5, 0, 2, 7];

solution(arr1);
solution(arr2);