// ���� n�� �� �ڸ����� ū �ͺ��� ���� ������ ������ ���ο� ������ return

function solution (n) {
    const arr = String(n).split('');
    // console.log(arr);
    const answer = Number(arr.sort((a, b) => b - a).join(""));
    return answer;
}

console.log(solution(118372));

// �ٸ� ��� �亯
// ���� + "" ���� string ��ȯ
// �ڸ����̱� ������ ��� ��Ұ� �� �ڸ����̹Ƿ� 
// sort() �����ε� �������� ������ �� ����
function solution2 (n) {
    const newN = n + "";
    const newArr = newN
        .split("")
        .sort()
        .reverse()
        .join("");
    return +newArr;
}

function solution3 (n) {
    return parseInt((n + "").split("").sort().reverse().join(""));
    // parseInt���� * 1�� ������ ��ȯ ����
    // return (n + "").split("").sort().reverse().join("") * 1
}

console.log("2: ", solution2(118372));
console.log("3: ", solution3(118372));