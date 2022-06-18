// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열을 return

function solution (n) {
    const answer = n.toString().split("").map((str) => Number(str)).reverse();
    return answer;
};

console.log(solution(9528));
console.log(solution(2957));
console.log(solution(123456789));

// 다른 사람 풀이
function solution2 (n) {
    var arr = [];

    do {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    } while (n > 0);

    return arr;
};