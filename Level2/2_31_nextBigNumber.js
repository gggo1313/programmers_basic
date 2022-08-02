// 다음 큰 숫자는 더 커야 함
// 다음 큰 숫자는 2진수로 변환했을 때 1의 개수가 같음
// 그 중 가장 작은 수가 다음 큰 숫자
// 다음 큰 숫자를 return
function solution (n) {
    // 2진수로 1의 개수와 항상 같이 변하는 값으로 비교
    const numOfOne = n.toString(2).split("1").length;

    while (true) {
        n++;
        if (n.toString(2).split("1").length === numOfOne) return n;
    };
};

console.log(solution(78));
console.log(solution(15));

// 다른 사람 풀이
// 2진수에서 1의 개수를 직접 비교
// String에서 match와 정규식을 이용해 1의 개수를 찾음
// 재귀함수로 값이 참이 될 때까지 함수를 다시 실행
function solution2 (n, a = n + 1) {
    return n.toString(2).match(/1/g).length === a.toString(2).match(/1/g).length ? a : solution(n, a + 1);
};