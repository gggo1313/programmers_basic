// ���� num�� ¦���� ��� "Even"�� ��ȯ
// Ȧ���� ��� "Odd" ��ȯ
// num�� �����̹Ƿ� ������ ��쵵 ��������� ��

function odd_even (num) {
    const abs_num = Math.abs(num);
    return abs_num % 2 === 1 ? "Odd" : "Even";
}

console.log(odd_even(-4));
console.log(odd_even(3));
console.log(odd_even(0));

// �ٸ� ��� �亯
function evenOrOdd(num) {
    return num % 2 ? "Odd" : "Even";
}
