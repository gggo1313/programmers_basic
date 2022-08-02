// 직사각형의 테두리에는 갈색 격자, 안 쪽은 노란 격자
// 가로의 길이는 세로의 길이보다 작지 않음
// 갈색 격자의 수 brown, 노란 격자의 수 yellow가 매개변수로 주어질 때
// 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return
function solution (brown, yellow) {
    const divisorPair = [];

    // 전체 넓이를 구함
    let area = brown + yellow;
    
    // 전체 넓이의 약수쌍을 구함
    for (let i = 3; i <= Math.sqrt(area); i++) {
        if (area % i === 0) divisorPair.push([area / i - 2, i - 2]);
    };
    
    // 각 쌍 중에서 가로 세로 각각 -2를 한 후 곱한 값이 yellow면 return
    for (pair of divisorPair) {
        if (pair[0] * pair[1] === yellow) return [pair[0] + 2, pair[1] + 2];
    };
};

console.log(solution(8, 1));
console.log(solution(10, 2));
console.log(solution(24, 24));