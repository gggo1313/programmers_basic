// 숫자 배열 nums에서 서로 다른 3개를 뽑아 더했을 때 소수가 되는 경우의 수를 return

function solution (nums) {
    let sum = [];

    // 더한 결과가 홀수이고 중복된 값이 없도록 sum 배열에 추가
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let temp = nums[i] + nums[j] + nums[k];
                if (!sum.includes[temp] && temp % 2 === 1) sum.push(temp);
            };
        };
    };

    // 크기 순으로 정렬하여 최대값 구함
    sum.sort((a, b) => a - b);

    // 3부터 최대값의 제곱근 이하의 홀수까지의 모든 배수를 sum 배열에서 제거
    for (let i = 3; i <= Math.sqrt(sum[sum.length - 1]); i += 2) {
        for (let j = i * 2; j <= sum[sum.length - 1]; j += i) {
            sum = sum.filter(e => e !== j);
        };
    };

    return sum.length;
};

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
