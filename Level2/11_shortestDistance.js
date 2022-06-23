// ���� 0 ���� 1�� ǥ���� maps
// ó�� ��ġ(1, 1)���� (n, m)���� �̵��ؾ� ��
// �ִ� �Ÿ��� return
// ��� �� ������ ������ ����� ������ -1�� return
const DIRECTION = [[1, 0], [0, 1], [-1, 0], [0, -1]];

const isRoad = (nextY, nextX, row, col) => nextY < 0 || nextX < 0 || nextY > row || nextX > col;

// function solution (maps) {
//     const row = maps.length - 1;
//     const col = maps[0].length - 1;

//     let count = 1;
//     let y0 = 0;
//     let x0 = 0;
//     const answer = [];

//     const move = (y, x, count) => {
//         if (y === row && x === col) {
//             answer.push(count);
//         };

//         for (let i = 0; i < DIRECTION.length; i++) {
//             const [dy, dx] = DIRECTION[i];
//             const [nextY, nextX] = [y + dy, x + dx];

//             if (isRoad(nextY, nextX, row, col)) continue;
//             console.log("Before: ", [nextY, nextX], maps[nextY][nextX]);
//             if (maps[nextY][nextX] === 0) continue;
//             maps[nextY][nextX] = 0;
//             console.log("After: ", [nextY, nextX], maps[nextY][nextX]);
//             console.log("");

//             count++;
//             move(nextY, nextX, count);
//         };
//     };

//     move(y0, x0, count);

//     return answer.length ? Math.min(...answer) : -1;
// };

function solution(maps) {
    const row = maps.length - 1, col = maps[0].length - 1;

    // ť - ���� ��ġ y, x, �̵� �Ÿ�
    const queue = [[0, 0, 1]];

    while(queue.length) {
        // ť ����
        let [y, x, count] = queue.shift();
        // ��� �� �����̶��
        if(y === row && x === col) return count;
        // �������� Ȯ��
        for(let i = 0; i < 4; i++) {
            const [dy, dx] = DIRECTION[i];
            const nextY = dy + y, nextX = dx + x;
            // �� ������ �����ٸ�
            if(isRoad(nextY, nextX, row, col)) continue;
            // ������ ���� ���̶��
            if(maps[nextY][nextX] === 0) continue;
            // �̹� ���� �� ������ ���� ������ ���� ����
            maps[nextY][nextX] = 0;
            // ������ Ȯ���ؾ��ϴ� �� ť�� �߰�
            // ���� �ִ� ���� �� ���̶�� �� �� �߰���
            queue.push([nextY, nextX, count + 1]);
        }
    }

    return -1;
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]));