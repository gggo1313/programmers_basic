// 행렬 arr1과 arr2를 곱한 결과를 return

function solution (arr1, arr2) {
    const [row, col] = [arr1.length, arr2[0].length];

    let answer = new Array(row);
    
    for (let i = 0; i < row; i++) answer[i] = new Array(col);

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            answer[i][j] = arr1[i].reduce((sum, arr1Value, rowIndex) => {
                return sum + arr1Value * arr2[rowIndex][j]
            }, 0);
        };
    };

    return answer;
};

let arr11 = [[1, 4], [3, 2], [4, 1]];
let arr12 = [[3, 3], [3, 3]]

console.log(solution2(arr11, arr12));

// 다른 사람 풀이
function solution2 (arr1, arr2) {
    return arr1.map((row) => arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0)))
};