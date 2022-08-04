// 0�� 1�� �̷���� 2���� �迭 board
// 1�� �̷���� ���� ū ���簢���� ã�� ���̸� return
function solution (board) {
    const [row, col] = [board.length, board[0].length];

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (
                board[i][j] !== 0 &&
                board[i - 1][j - 1] !== 0 && // �ʿ���� ����
                board[i - 1][j] !== 0 && // �ʿ���� ����
                board[i][j - 1] !== 0 // �ʿ���� ����
                // ���� ��ǥ���� ���簢���� ���� �� �ֳ� ���İ� �߿�����
                // ��, ��, �밢�� ��ǥ�� 0���� �ƴ����� �߿����� ����
                // �� ū ���簢���� ����� ���ؼ��� ��, ��, �밢 ��� 
                // ���簢���� ���� �� �־�� ��
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