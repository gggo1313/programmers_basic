// 송전탑의 개수 n과 연결되어 있는 현황 배열 wires
// 전선 하나를 끊었을 때 연결되어 있는 송전탑 수의 차의 최소값을 return
function solution (n, wires) {
    const links = {};
    wires.map(w => {
        const [a, b] = w;
        if(!links[a]) links[a] = [];
        if(!links[b]) links[b] = [];
        links[a].push(b);
        links[b].push(a);
    });

    const searchTree = (root, exception) => {
        let count = 0;
        const queue = [root];
        const visited = [];
        visited[root] = true;
        while (queue.length) {
            const cur = queue.pop();
            links[cur].map(next => {
                if (next !== exception && !visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                };
            });

            count++;
        };

        return count;
    };

    let answer = 100;
    wires.map((w, i) => {
        const [a, b] = w;
        const dif = Math.abs(n - searchTree(a, b) * 2);
        answer = answer > dif ? dif : answer;
    });

    return answer;
};

let wires1 = [[1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [4, 7], [7, 8], [7, 9]];
let wires2 = [[1, 2], [2, 3], [3, 4]];
let wires3 = [[1, 2], [2, 7], [3, 7], [3, 4], [4, 5], [6, 7]];

console.log(solution2(9, wires1));
console.log(solution(4, wires2));
console.log(solution(7, wires3));

function solution2 (n, wires) {
    // 길이가 n인 빈 배열 g 생성
    const g = Array.from({length: n}, () => []);
    for (const e of wires) {
        // 각 송전탑 번호별(index)로 연결된 송전탑의 번호를 배열로 표시
        g[e[0] - 1].push(e[1] - 1);
        g[e[1] - 1].push(e[0] - 1);
    };

    // 전선을 끊었을 때 연결된 송전탑 덩어리를 판별하기 위한 배열 p 생성
    const p = new Array(n).fill(-1);
    // 전선을 끊었을 때 끊어진 전선의 시작 송전탑
    const q = [0];

    for (let i = 0; i < q.length; i++) {
        const u = q[i];
        for (const v of g[u]) if (v != p[u]) {
            p[v] = u;
            q.push(v);
        };
    };

    let ans = n;
    // 자기자신의 개수를 가지고 있는 배열 dp 생성
    const dp = new Array(n).fill(1);

    for (let i = q.length; i--;) {
        // 깊이가 가장 깊은 노드부터 현재 노드까지의 노드개수를
        // 부모 노드의 개수에 더해주는 방법
        // dp[i]는 (노드 i의 자식 노드 개수 + 1(자기 자신))
        const v = q[i];
        dp[p[v]] += dp[v];

        console.log("v: ", v, "p[v]: ", p[v]);
        console.log("dp: ", dp, "dp[v]: ", dp[v]);

        let a = Math.abs(n - 2 * dp[v]);
        if (ans > a) ans = a;
    };

    return ans;
};