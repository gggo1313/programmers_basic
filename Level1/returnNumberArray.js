// �ڿ��� n�� ������ �� �ڸ� ���ڸ� ���ҷ� ������ �迭�� return

function solution (n) {
    const answer = n.toString().split("").map((str) => Number(str)).reverse();
    return answer;
};

console.log(solution(9528));
console.log(solution(2957));
console.log(solution(123456789));

// �ٸ� ��� Ǯ��
function solution2 (n) {
    var arr = [];

    do {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    } while (n > 0);

    return arr;
};