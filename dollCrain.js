// �����̱� �ȿ��� N X N �迭�� �Ǿ� ����(5 ~ 30)
// �����̱� �ȿ��� �������� ���� �ٸ� ���ڷ� �׿� ����(1 ~ 100)
// moves�� ���� �̱⸦ �õ��� ��ġ
// �ٱ��Ͽ� ���� ��ȣ�� ������ �� �� ���̸� �ش� 2 ������ ����
// ���� �迭 board�� ���� �迭 moves�� �־����� ��, ���� ������ ������ return
function solution (board, moves) {
    let cnt = 0;
    const basket = [];

    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i] - 1] !== 0) {
                console.log(board[j][moves[i] - 1]);
                let doll = board[j][moves[i] - 1];
                board[j][moves[i] - 1] = 0;
                
                if (basket[basket.length - 1] && basket[basket.length - 1] === doll ) {
                    basket.pop();
                    cnt += 2;                    
                } else {
                    basket.push(doll);
                };
                break;
            };
        };
    };

    console.log("Board", board);
    console.log("Basket", basket);

    return cnt;
};

let board1 = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]
let moves1 = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board1, moves1));

// �ٸ� ��� Ǯ��
// ��� ���� �ٲ㼭 ������ ���� ���� ���� �����ϱ�
const transpose = matrix =>
    matrix.reduce(
        // reduce�� �� ���� map�� ó���� ���� �� [] �迭�� �߰���
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        // �� ���� i ���� result[i] || []�� row[i]�� �߰���
        // result[i] || []�� result[i]�� ������(NULL�̳� undefined�� �ƴϸ�)
        // result[i]�� ����, �ƴϸ� [] ����
        []
    );

const solution = (board, moves) => {
    const stacks = transpose(board).map(row => 
        row.reverse().filter(el => el !== 0)
    );
    const basket = [];
    let result = 0;

    for (const move of moves) {
        const pop = stacks[move - 1].pop();
        if (!pop) continue;
        if (pop === basket[basket.length - 1]) {
            basket.pop();
            result += 2;
            continue;
        };
        basket.push(pop);
    }

    return result;
}