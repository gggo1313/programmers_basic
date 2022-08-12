// n X n 배열을 만듦
// [0, 0]부터 [i, i]까지의 영역 내의 모든 빈 칸을 숫자 i로 채움
// 배열 내의 모든 원소를 이어 붙임
// [left] ~ [right] 를 return
function solution (n, left, right) {
    const answer = [];

    for (let i = left; i <= right; i++) {
        let row = Math.floor(i /n);
        let col = i % n;

        answer.push(row > col ? row + 1 : col + 1);
    };

    return answer;
};

console.log(solution(3, 2, 5))
console.log(solution(4, 7, 14))

// 다른 사람 풀이
function solution2 (n, left, right) {
    const answer = [];

    for (let i = left; i <= right; i++) {
        answer.push(Math.max(i % n, parseInt(i / n)) + 1);
    };

    return answer;
};

console.log(solution2(4, 7, 14))