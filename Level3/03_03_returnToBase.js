// 지역의 수 n
// 두 지역을 잇는 길의 정보가 담긴 배열 roads
// 각 부대원이 위치한 지역들을 나타내는 배열 sources
// 목표 도착 지점 destination
// 복귀 불가이면 -1
// 각 부대원의 목표까지의 최단거리를 return
const solution = (n, roads, sources, destination) => {
    // 각 지역 별 연결된 지역 표시 배열
    const roadMap = new Array(n + 1).fill(null).map(_ => []);
    const placeTime = Array.from(Array(n + 1), () => Infinity);

    for (let [a, b] of roads) {
        roadMap[a].push(b);
        roadMap[b].push(a);
    };

    // 각 부대원이 있는 위치에서 연결된 곳 하나씩 이동 DP
    // 지나온 곳은 이동하지 않음
    let queue = [destination];
    placeTime[destination] = 0;

    while (queue.length) {
        let to = queue.shift();
        console.log("queue: ", queue, "to: ", to);

        for (let next of roadMap[to]) {
            if (placeTime[next] > placeTime[to] + 1) {
                placeTime[next] = placeTime[to] + 1;
                queue.push(next);
            };
        };
    };

    // 각 부대원이 있는 곳까지 걸리는 최단 거리를 answer에 push
    return sources.map((v) => {
        if (placeTime[v] === Infinity) return -1;
        else return placeTime[v];
    });
};

const roads1 = [[1, 2], [2, 3]];
const roads2 = [[1, 2], [1, 4], [2, 4], [2, 5], [4, 5]];
const sources1 = [2, 3];
const sources2 = [1, 3, 5];

console.log(solution(3, roads1, sources1, 1));
console.log(solution(5, roads2, sources2, 5));