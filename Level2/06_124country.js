// 모든 숫자를 124로 표기
// 3진법이지만 숫자를 1, 2, 4로 사용
// 자연수 n을 124 숫자로 return
function solution (n) {
    let answer = [];
    const make124 = (num) => {
        if (num % 3 > 0) {
            console.log("1: ", n);
            answer.unshift(num % 3);
            n = (n - (num % 3)) / 3;
        } else {
            console.log("2: ", n);
            answer.unshift(4);
            n = (n - 3) / 3;
        };
        console.log("n: ", n, "Answer: ", answer);
        console.log("")

        if (n > 0) make124(n);
    };

    make124(n);
    
    return answer.join("");
};

// console.log(solution(1));
// console.log(solution(2));
// console.log(solution(3));
// console.log(solution(4));
// console.log(solution(11));
// console.log(solution(12));

// 다른 사람 풀이
// parseInt와 배열 index를 활용
function change124 (n) {
    return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
};

console.log(change124(12));