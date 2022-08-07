// 밑변의 길이와 높이가 n인 삼각형
// 맨 위 꼭지점부터 반시계방향으로 달팽이 채우기를 진행
// 맨 위 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return
function solution (n) {
    const answer = [];
    let count = 0;
    const arr = Array.from({length: n}, (v, index) => Array(index + 1).fill(0));
    let x = -1;
    let y = 0;

    while (n > 0) {
        for (let i = 0; i < n; i++) {
            x++;
            count++;
            arr[x][y] = count;
        };

        for (let i = 0; i < n - 1; i++) {
            y++;
            count++;
            arr[x][y] = count;
        };

        for (let i = 0; i < n - 2; i++) {
            x--;
            y--;
            count++;
            arr[x][y] = count;
        };

        n -= 3;
    };

    for (array of arr) {
        answer.push(...array);
    };

    return answer;
};

console.log(solution(4));
console.log(solution(5));
console.log(solution(6));

// 다른 사람 풀이
// flat을 이용하여 배열 내 원소배열을 쉽게 벗김
function solution2 (n) {
    let a = Array(n).fill().map((_, i) => Array(i + 1).fill());
    let row = -1;
    let col = 0;
    let fill = 0;

    for (let i = n; i > 0; i -= 3) {
        a[++row][col] = ++fill;
        for (let j = 0; j < i - 1; j++) a[++row][col] = ++fill;
        for (let j = 0; j < i - 1; j++) a[row][++col] = ++fill;
        for (let j = 0; j < i - 2; j++) a[--row][--col] = ++fill;
    };

    return a.flat();
};