// 1행에서부터 이전과 같은 열을 가지 않고 얻을 수 있는 점수의 최대값을 return
function solution (land) {
    let answer = [];

    // 첫 번째 행에서 자신의 index를 제외한 나머지 index의 값들 중
    // max 값을 찾아서 더해줌
    // 마지막 행까지 반복

    for (let i = 1; i < land.length; i++) {
        land[i][0] += Math.max(
            land[i - 1][1],
            land[i - 1][2],
            land[i - 1][3]
        );
        land[i][1] += Math.max(
            land[i - 1][0],
            land[i - 1][2],
            land[i - 1][3]
        );
        land[i][2] += Math.max(
            land[i - 1][1],
            land[i - 1][0],
            land[i - 1][3]
        );
        land[i][3] += Math.max(
            land[i - 1][1],
            land[i - 1][2],
            land[i - 1][0]
        );
    };

    answer = land[land.length - 1];

    return Math.max(...answer);
};

let land1 = [[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]];

console.log(solution(land1));

// 다른 사람 풀이
// reduce를 이용한 풀이
// 하지만 런타임 에러
function solution2 (land) {
    return Math.max(...land.reduce((a, c) => {
        return [
            c[0] + Math.max(a[1], a[2], a[3]),
            c[1] + Math.max(a[0], a[2], a[3]),
            c[2] + Math.max(a[1], a[0], a[3]),
            c[3] + Math.max(a[1], a[2], a[0])
        ];
    }, [0, 0, 0, 0]));
};