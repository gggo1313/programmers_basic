// 주어진 m X n 문자열 board에서 2 X 2인 블록을 삭제
// 삭제 후 블록을 밑으로 내림
// 2 X 2 블록이 또다시 존재한다면 반복

function solution (m, n, board) {
    let answer = 0;
    let arrBoard = board.map((v) => v.split(""));

    while (true) {
        const arr = [];
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (
                    arrBoard[i][j] &&
                    arrBoard[i][j] === arrBoard[i + 1][j] &&
                    arrBoard[i][j] === arrBoard[i][j + 1] &&
                    arrBoard[i][j] === arrBoard[i + 1][j + 1]
                ) {
                    arr.push([i, j]);
                }
            }
        }

        if (!arr.length) {
            return [].concat(...arrBoard).filter(v => !v).length;
        };

        for (let i = 0; i < arr.length; i++) {
            const col = arr[i][0];
            const row = arr[i][1];
            arrBoard[col][row] = 0;
            arrBoard[col + 1][row] = 0;
            arrBoard[col][row + 1] = 0;
            arrBoard[col + 1][row + 1] = 0;
        };

        for (let i = m - 1; i > 0; i--) {
            if (!board[i].some(v => !v)) continue;

            for (let j = 0; j < n; j++) {
                for (let k = i - 1; k >= 0 && !arrBoard[i][j]; k--) {
                    if (arrBoard[k][j]) {
                        arrBoard[i][j] = board[k][j];
                        arrBoard[k][j] = 0;
                        break;
                    };
                }
            }
        }
    }
    
}

function solution2 (m, n, board) {
    board = board.map(v => v.split(''));

    while (true) {
        let founded = [];

        // 찾기
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (board[i][j] && board[i][j] === board[i][j - 1] && board[i][j] === board[i - 1][j - 1] && board[i][j] === board[i - 1][j]) {
                    founded.push([i, j]);
                }
            }
        }

        if (! founded.length) return [].concat(...board).filter(v => ! v).length;

        // 부수기
        founded.forEach(a => {
            board[a[0]][a[1]] = 0;
            board[a[0]][a[1] - 1] = 0;
            board[a[0] - 1][a[1] - 1] = 0;
            board[a[0] - 1][a[1]] = 0;
        });

        // 재정렬
        for (let i = m - 1; i > 0; i--) {
            if (! board[i].some(v => ! v)) continue;

            for (let j = 0; j < n; j++) {
                for (let k = i - 1; k >= 0 && ! board[i][j]; k--) {
                    if (board[k][j]) {
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}