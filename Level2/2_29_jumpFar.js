// 한 번에 한 칸 또는 두 칸 뛸 수 있음
// n 칸을 뛰는 방법의 수를 1234567로 나눈 나머지를 return

function solution (n) {
    // n - 2칸에서 2칸을 뛰는 방법 
    // n - 1칸에서 1칸을 뛰는 방법
    // 합치면 n칸을 뛰는 방법
    const dp = [0, 1, 2];
    
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    };

    return dp[n];
};

console.log(solution(4));