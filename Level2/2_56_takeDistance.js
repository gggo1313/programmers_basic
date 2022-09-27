// 사람(p), 테이블(0), 파티션(x)로 이루어진 5 X 5 대기실
// 대기실 5개로 이루어진 행렬 places
// 맨하탄거리 2 이하이면 거리두기를 지키지 않은 것으로 간주 return 0
// 맨하탄거리 2 이하여도 사이에 파티션(X)이 있으면 지킨 것으로 간주
// 각 대기실의 거리두기 여부를 배열에 순서대로 담아 return

// const로 함수를 정의하면 먼저 선언해야 사용할 수 있음
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

    // 대기실 순서대로 확인
    for (let i = 0; i < places.length; i++) {
        answer.push(iskeepingDistance(places[i]));
    };

    return answer;
};

function isLegal(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            // [0, 0] 부터 [i, j]가 P인 경우
            if (array[i][j] === "P") {
                // 바로 옆에 다른 P가 있을 경우 안 지킴
                if (
                    array[i + 1][j] === "P" ||
                    array[i][j + 1] === "P"
                ) {
                    return 0;
                } else if (array[i + 1][j + 1] === "P") {
                    // 대각선에 다른 P가 있을 경우
                    // 사이값이 모두 파티션이어야 지킴
                    if (
                        array[i + 1][j] === "X" &&
                        array[i][j + 1] === "X"
                        ) {
                            return 1;
                        } else {
                            return 0;
                        };
                } else if (array[i + 2][j] === "P") {
                    // 직선 거리 2에 다른 P가 있을 경우
                    // 사이에 파티션이어야 지킴
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