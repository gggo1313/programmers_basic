// 인형뽑기 안에는 N X N 배열로 되어 있음(5 ~ 30)
// 인형뽑기 안에는 인형마다 각기 다른 숫자로 쌓여 있음(1 ~ 100)
// moves는 인형 뽑기를 시도한 위치
// 바구니에 같은 번호의 인형이 두 개 쌓이면 해당 2 인형은 터짐
// 인형 배열 board와 시행 배열 moves가 주어졌을 때, 터진 인형의 개수를 return
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

// 다른 사람 풀이
// 행과 열을 바꿔서 인형을 뽑은 라인 별로 정렬하기
const transpose = matrix =>
    matrix.reduce(
        // reduce로 각 행을 map의 처리를 행한 뒤 [] 배열에 추가함
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        // 각 행의 i 마다 result[i] || []에 row[i]를 추가함
        // result[i] || []는 result[i]가 있으면(NULL이나 undefined가 아니면)
        // result[i]를 선택, 아니면 [] 선택
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