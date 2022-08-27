// S, L, R 각각 경로 직진, 좌회전, 우회전하는 칸이 존재
// 칸의 배열을 담은 grid가 주어짐
// 빛을 쏘았을 때 사이클의 종류마다 길이를 배열에 담아 return
function solution (grid) {
    const answer = [];
    const row = grid.length;
    const col = grid[0].length;

    // 각 칸과 방향을 배열로 생성
    let visited = Array.from(Array(row), () => 
    Array.from(Array(col), () => Array(4).fill(false)));

    // x방향, y방향
    const dX = [1, -1, 0, 0];
    const dY = [0, 0, 1, -1];

    // 들어온 방향에 대한 방출 방향의 index값
    let possibilities = [
        [0, 3, 2],
        [1, 2, 3],
        [2, 0, 1],
        [3, 1, 0]
    ];

    // 모든 칸에 대해 네 방향 입력에 대한 방출 방향을 찾아서 true로 변경
    // count로 cycle의 경로 수를 구함
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            for (let k = 0; k < 4; k++) {
                if (visited[i][j][k]) continue;

                let x = i;
                let y = j;
                let dir = k;
                let count = 0;

                while (!visited[x][y][dir]) {
                    count++;
                    visited[x][y][dir] = true;

                    switch (grid[x][y]) {
                        case "S":
                            dir = possibilities[dir][0];
                            break;
                        case "L":
                            dir = possibilities[dir][1];
                            break;
                        case "R":
                            dir = possibilities[dir][2];
                            break;
                    };

                    x += dX[dir];
                    y += dY[dir];

                    x = x === row ? 0 : x < 0 ? row - 1 : x;
                    y = y === col ? 0 : y < 0 ? col - 1 : y;
                };

                answer.push(count);
            };
        };
    };

    return answer.sort((a, b) => a - b);
};