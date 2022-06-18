// ���밪�� ���ʴ�� ���� ���� �迭 absolutes
// �� �������� ��ȣ�� ���ʴ�� ���� �Ҹ��� �迭 signs
// ���� �������� ���� ���Ͽ� return

function solution (absolutes, signs) {
    const sumOfAbs = absolutes.reduce((prev, cur) => prev + cur, 0);

    const sumOfPositive = absolutes
        .reduce((prev, cur, idx) => prev + cur * signs[idx], 0);
    // [sumOfNegative] = sumOfAbs = sumOfPositive
    console.log(sumOfAbs, sumOfPositive)

    return sumOfPositive - (sumOfAbs - sumOfPositive);
};

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));

// �ٸ� ��� Ǯ��
// signs�� true, false�� ���׿��꿡 ���
function solution2 (absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (sign[i] ? 1 : -1)), 0)
};