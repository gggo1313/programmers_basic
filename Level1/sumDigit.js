// 자연수 N의 각 자리수의 합을 구해서 return

function solution (N) {
    let result = 0;

    do {
        result += N % 10;
        N = Math.floor(N / 10);
        // console.log(result);
    } while (N > 0);

    return result;
};

solution(9876);

// 다른 사람 풀이

function solution2(n) {
    return (n + "").split("").reduce((acc, cur) => acc + parseInt(cur), 0)
}

console.log(solution2(98765));