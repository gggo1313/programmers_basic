// 각 마을과 마을 사이의 도로를 이동하는 시간이 담긴 배열 road
// 총 마을 수 N(시작지 1번 포함)
// 배달 가능 최대 시간 K
// 배달 가능한 마을의 개수를 return
function solution(N, road, K) {
    const arr = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
    const lines = Array.from(Array(N + 1), () => []);

    road.forEach((value) => {
        let [a, b, c] = value;
        lines[a].push({to: b, cost: c});
        lines[b].push({to: a, cost: c});
    });

    let queue = [{to: 1, cost: 0}];
    arr[1] = 0;

    while(queue.length) {
        let {to} = queue.pop();

        lines[to].forEach((next) => {
            if (arr[next.to] > arr[to] + next.cost) {
                arr[next.to] = arr[to] + next.cost;
                queue.push(next);
            };
        });
    };

    return arr.filter((item) => item <= K).length;
};

const road1 = [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]];
const road2 = [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]];
console.log(solution(5, road1, 3));