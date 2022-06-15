// 0 ~ 9������ ���� �� �Ϻΰ� ����ִ� ���� �迭 numbers
// numbers�� ���� ���ڸ� ��� ���� ���� return
// numbers���� �ߺ��� ���� ����

function solution (numbers) {
    let answer = 45; // 0 ~ 9������ ��

    const sumOfNumbers = numbers.reduce((prev, cur) => prev + cur, 0);

    return answer - sumOfNumbers;
};

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));