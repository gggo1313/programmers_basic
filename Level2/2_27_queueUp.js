// n명의 사람들이 줄을 서는 방법을 사전순으로 정렬
// k번째의 방법을 return
function solution (n, k) {
    const answer = [];
    // k - 1을 (n - 1)!로 나눈 몫은 n의 인덱스 
    let value = k - 1;

    // n명을 오름차순으로 배열 생성
    const arr = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        arr[i] = arr[i - 1] + 1;
    };

    while(arr.length) {
        // k번째 방법을 찾으면 종료
        if (value === 0) {
            answer.push(...arr);
            break;
        };

        // (n - 1)!
        const facto = factorial(arr.length - 1);
        // k - 1을 (n - 1)!로 나눈 몫
        const idx = Math.floor(value / facto);
        // value에서 (n - 1)!로 나눈 나머지를 value값 대체
        value = value % facto;

        // answer에 몫에 해당하는 인덱스의 숫자를 추가
        answer.push(arr[idx]);
        // arr에서 answer에 추가한 숫자를 제거
        arr.splice(idx, 1);
    };

    return answer;    
};

const factorial = (num) => {
    let result = 1;
    for (let i = 2; i <= num; i++) result *= i;

    return result;
};

console.log(solution(11, 3628801));