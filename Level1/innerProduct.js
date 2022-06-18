// 길이가 같은 두 1차원 정수 배열 a, b의 내적을 return

function solution (a, b) {
    let answer = 0;

    for (let i = 0; i < a.length; i++) {
        answer += a[i] * b[i];
    };

    return answer;
};

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
console.log(solution([-1, 0, 1], [1, 0, -1]));

// 다른 사람 풀이
// reduce 사용

function solution2 (a, b) {
    var answer = a.reduce((acc, cur, idx) => acc += cur * b[idx], 0);
    return answer;
};

console.log(solution2([1, 2, 3, 4], [-3, -1, 0, 2]));
console.log(solution2([-1, 0, 1], [1, 0, -1]));