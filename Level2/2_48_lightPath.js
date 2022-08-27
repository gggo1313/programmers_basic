// S, L, R ���� ��� ����, ��ȸ��, ��ȸ���ϴ� ĭ�� ����
// ĭ�� �迭�� ���� grid�� �־���
// ���� ����� �� ����Ŭ�� �������� ���̸� �迭�� ��� return
function solution (grid) {
    const answer = [];
    const row = grid.length;
    const col = grid[0].length;

    // �� ĭ�� ������ �迭�� ����
    let visited = Array.from(Array(row), () => 
    Array.from(Array(col), () => Array(4).fill(false)));

    // x����, y����
    const dX = [1, -1, 0, 0];
    const dY = [0, 0, 1, -1];

    // ���� ���⿡ ���� ���� ������ index��
    let possibilities = [
        [0, 3, 2],
        [1, 2, 3],
        [2, 0, 1],
        [3, 1, 0]
    ];

    // ��� ĭ�� ���� �� ���� �Է¿� ���� ���� ������ ã�Ƽ� true�� ����
    // count�� cycle�� ��� ���� ����
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