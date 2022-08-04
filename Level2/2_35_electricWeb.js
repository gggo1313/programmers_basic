// ����ž�� ���� n�� ����Ǿ� �ִ� ��Ȳ �迭 wires
// ���� �ϳ��� ������ �� ����Ǿ� �ִ� ����ž ���� ���� �ּҰ��� return
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
    // ���̰� n�� �� �迭 g ����
    const g = Array.from({length: n}, () => []);
    for (const e of wires) {
        // �� ����ž ��ȣ��(index)�� ����� ����ž�� ��ȣ�� �迭�� ǥ��
        g[e[0] - 1].push(e[1] - 1);
        g[e[1] - 1].push(e[0] - 1);
    };

    // ������ ������ �� ����� ����ž ����� �Ǻ��ϱ� ���� �迭 p ����
    const p = new Array(n).fill(-1);
    // ������ ������ �� ������ ������ ���� ����ž
    const q = [0];

    for (let i = 0; i < q.length; i++) {
        const u = q[i];
        for (const v of g[u]) if (v != p[u]) {
            p[v] = u;
            q.push(v);
        };
    };

    let ans = n;
    // �ڱ��ڽ��� ������ ������ �ִ� �迭 dp ����
    const dp = new Array(n).fill(1);

    for (let i = q.length; i--;) {
        // ���̰� ���� ���� ������ ���� �������� ��尳����
        // �θ� ����� ������ �����ִ� ���
        // dp[i]�� (��� i�� �ڽ� ��� ���� + 1(�ڱ� �ڽ�))
        const v = q[i];
        dp[p[v]] += dp[v];

        console.log("v: ", v, "p[v]: ", p[v]);
        console.log("dp: ", dp, "dp[v]: ", dp[v]);

        let a = Math.abs(n - 2 * dp[v]);
        if (ans > a) ans = a;
    };

    return ans;
};