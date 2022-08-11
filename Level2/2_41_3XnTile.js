// 3 X n인 바닥을 2 X 1인 타일로 채우려고 함
// n이 주어졌을 때 채울 수 있는 방법의 수를 return
function solution (n) {
    if (n % 2 === 1) return o;
    // 1. (n - 2) * 3가지
    // 2. (n - 4) * 2가지
    // n = 2일 때 3가지
    // n = 4일 때 11가지
    const MOD = 1000000007;
    const arr = [3, 11];
    
    if (n === 2) {
        return 3;
    } else if (n === 4) {
        return 11;
    } else {
        for (let i = 2; i < n / 2; i++) {
            arr[i] = arr[i - 1] * 3 + 2;

            for (let j = 0; j < i - 1; j++) {
                arr[i] += arr[j] * 2;
            };

            arr[i] %= MOD;
        };
    };

    return arr[arr.length - 1];
};

const idx = 8 >> 1;
console.log(solution(6))