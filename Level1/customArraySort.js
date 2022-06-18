// ���ڿ��� ������ ����Ʈ strings�� ���� n�� �־���
// �� ���ڿ��� �ε��� n��° ���ڸ� �������� �������� �����Ͽ� return

function solution (strings, n) {
    return strings.sort((a, b) => {
        if(a[n] > b[n]) return 1;
        if(a[n] < b[n]) return -1;
        if(a[n] === b[n]) return a < b ? -1 : 1; // ���� ��� ���� �������� ����
    });
};

const testArr1 = ["sun", "bed", "car"];
const testArr2 = ["abce", "abcd", "cdx"];
console.log("Test1: ", solution(testArr1, 1));
console.log("Test2: ", solution(testArr2, 2));

// �ٸ� ��� Ǯ��
// n��° ���ڰ� ���� ��� �׳� ��, �ƴ� ��� n��° ���� ��

function solution2(strings, n) {
    return strings.sort((s1, s2) => {
        s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
    });
};

console.log("Test1: ", solution2(testArr1, 1));
console.log("Test2: ", solution2(testArr2, 2));