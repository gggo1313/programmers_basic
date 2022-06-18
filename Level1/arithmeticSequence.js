// 정수 x와 자연수 n을 입력받음
// x부터 시작해서 x만큼 증가하는 등차수열 n개를 배열로 return

function solution (x, n) {
    const answer = [];
    for (i = 0; i < n; i++) {
        answer.push(x + x * i)
        console.log(answer);
    }

    return answer;    
};

// solution(2, 5);
// solution(4, 3);
// solution(-4, 2);

// 다른 사람 답변
function solution2 (x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

// 다른 사람 답변2
function solution3 ( x, n) {
    return [...Array(n).keys()].map(v => (v + 1) * x);
}

console.log(solution2(2, 5));
console.log(solution2(4, 3));
console.log(solution2(-4, 2));

console.log(solution3(2, 5));
console.log(solution3(4, 3));
console.log(solution3(-4, 2));