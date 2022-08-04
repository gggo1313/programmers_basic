// 0과 1로 이루어진 2차원 배열 board
// 1로 이루어진 가장 큰 정사각형을 찾아 넓이를 return
function solution (board) {
    const [row, col] = [board.length, board[0].length];

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (
                board[i][j] !== 0 &&
                board[i - 1][j - 1] !== 0 && // 필요없는 조건
                board[i - 1][j] !== 0 && // 필요없는 조건
                board[i][j - 1] !== 0 // 필요없는 조건
                // 현재 좌표에서 정사각형을 만들 수 있냐 없냐가 중요하지
                // 왼, 위, 대각의 좌표가 0인지 아닌지는 중요하지 않음
                // 더 큰 정사각형을 만들기 위해서는 왼, 위, 대각 모두 
                // 정사각형을 만들 수 있어야 함
            ) {
                const min = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]);
                board[i][j] = min + 1;
            };
        };
    };

    const maxOfRow = board.map(v => Math.max(...v));

    return Math.max(...maxOfRow) ** 2;
};

console.log(solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]));
console.log(solution([[0,0,1,1],[1,1,1,1]]));