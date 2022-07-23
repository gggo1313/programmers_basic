// 처음에는 기둥에 원판이 작은 것이 위에 있도록 쌓여 있음
// 큰 원판이 작은 원판 위에 있을 수 없음
// 1번 기둥에 있는 n개의 원판을 3번 기둥으로 옮기는 최소 방법을 return
function solution (n) {
    dp (n, 1, 3, 2);

    return arr;
};

const arr = [];

function dp (n, src, dst, mid) {
    if (n === 1) {
        arr.push([src, dst]);
    } else {
        // n-1 개의 원반을 1에서 2로 옮기는 방법
        dp(n - 1, src, mid, dst);
        // 1에 있는 n 번 원반을 1에서 3으로 옮김
        arr.push([src, dst]);
        // n-1 개의 원반을 2에서 3으로 옮기는 방법
        dp(n - 1, mid, dst, src);
    };
};

console.log(solution(5));