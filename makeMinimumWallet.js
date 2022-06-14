// [가로, 세로] 길이가 주어지는 명함을 여러 장 넣을 때
// 모든 명함을 넣을 수 있는 가장 작은 사이즈의 지갑의 크기를 return

function solution (sizes) {
    const width = [];
    const height = [];

    for (let i = 0; i < sizes.length; i++) {
        sizes[i].sort((a, b) => a - b);
        width.push(sizes[i][0]);
        height.push(sizes[i][1]);
    };

    // 배열의 값을 비교하기 위해서는 ... 해줘야 함
    return Math.max(...width) * Math.max(...height);
};

const size1 = [[60, 50], [30, 70], [60, 30], [80, 40]];
const size2 = [[10, 7], [12, 3], [8, 15], [5, 15], [14, 7]];
const size3 = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]];

console.log(solution(size1));
console.log(solution(size2));
console.log(solution(size3));

// 다른 사람 풀이
// 가독성 좋음

function solution2 (sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    // const newSizes = sizes.map(e => e.sort((a, b) => a- b));

    let maxSize = [0, 0];
    rotated.forEach(([w, h]) => {
        // 이전 값과 비교하여 크면 Max 값 교체
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    });

    return maxSize[0] * maxSize[1];
}