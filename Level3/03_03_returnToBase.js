// ������ �� n
// �� ������ �մ� ���� ������ ��� �迭 roads
// �� �δ���� ��ġ�� �������� ��Ÿ���� �迭 sources
// ��ǥ ���� ���� destination
// ���� �Ұ��̸� -1
// �� �δ���� ��ǥ������ �ִܰŸ��� return
const solution = (n, roads, sources, destination) => {
    // �� ���� �� ����� ���� ǥ�� �迭
    const roadMap = new Array(n + 1).fill(null).map(_ => []);
    const placeTime = Array.from(Array(n + 1), () => Infinity);

    for (let [a, b] of roads) {
        roadMap[a].push(b);
        roadMap[b].push(a);
    };

    // �� �δ���� �ִ� ��ġ���� ����� �� �ϳ��� �̵� DP
    // ������ ���� �̵����� ����
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

    // �� �δ���� �ִ� ������ �ɸ��� �ִ� �Ÿ��� answer�� push
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