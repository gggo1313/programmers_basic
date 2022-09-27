// ���(p), ���̺�(0), ��Ƽ��(x)�� �̷���� 5 X 5 ����
// ���� 5���� �̷���� ��� places
// ����ź�Ÿ� 2 �����̸� �Ÿ��α⸦ ��Ű�� ���� ������ ���� return 0
// ����ź�Ÿ� 2 ���Ͽ��� ���̿� ��Ƽ��(X)�� ������ ��Ų ������ ����
// �� ������ �Ÿ��α� ���θ� �迭�� ������� ��� return

// const�� �Լ��� �����ϸ� ���� �����ؾ� ����� �� ����
const iskeepingDistance = (place) => {
    let roomInfo = place.map((rooms) => rooms.split(''));

    let queue = [];

    for (let i = 0; i < place.length; i++) {
        for (let j = 0; j < place[0].length; j++) {
            if (roomInfo[i][j] === "P") {
                queue.push([i, j]);
            };
        };
    };

    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, 1, -1];

    while (queue.length) {
        const [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
            if (roomInfo[nx][ny] === "X") continue;
            if (roomInfo[nx][ny] === "P") return 0;

            for (let j = 0; j < 4; j++) {
                let aroundNX = nx + dx[j];
                let aroundNY = ny + dy[j];

                if (aroundNX < 0 || aroundNX >= 5 || aroundNY < 0 || aroundNY >= 5) continue;
                if (aroundNX === x && aroundNY === y) continue;
                if (roomInfo[aroundNX][aroundNY] === "P") return 0;
            };
        };
    };

    return 1;
};

function solution(places) {
    const answer = [];

    // ���� ������� Ȯ��
    for (let i = 0; i < places.length; i++) {
        answer.push(iskeepingDistance(places[i]));
    };

    return answer;
};

function isLegal(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            // [0, 0] ���� [i, j]�� P�� ���
            if (array[i][j] === "P") {
                // �ٷ� ���� �ٸ� P�� ���� ��� �� ��Ŵ
                if (
                    array[i + 1][j] === "P" ||
                    array[i][j + 1] === "P"
                ) {
                    return 0;
                } else if (array[i + 1][j + 1] === "P") {
                    // �밢���� �ٸ� P�� ���� ���
                    // ���̰��� ��� ��Ƽ���̾�� ��Ŵ
                    if (
                        array[i + 1][j] === "X" &&
                        array[i][j + 1] === "X"
                        ) {
                            return 1;
                        } else {
                            return 0;
                        };
                } else if (array[i + 2][j] === "P") {
                    // ���� �Ÿ� 2�� �ٸ� P�� ���� ���
                    // ���̿� ��Ƽ���̾�� ��Ŵ
                    if (array[i + 1][j] === "X") {
                        return 1;
                    } else {
                        return 0;
                    };
                } else if (array[i][j + 2] === "P") {
                    if (array[i][j + 1] === "X") {
                        return 1;
                    } else {
                        return 0;
                    };
                };
            };
        };
    };

    return 1;
};

const places1 = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]];
console.log("12345"[1]);
console.log(solution(places1));



// 2, 9, 17, 21, 31