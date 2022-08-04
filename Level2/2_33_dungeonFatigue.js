// 던전마다 [입장 최소 필요 피로도, 소모 피로도]가 담긴 배열 dungeons
// 현재 피로도 k가 주어질 때, 최대로 탐험할 수 있는 던전 수를 return
function solution (k, dungeons) {
    const answer = [];
    const visited = new Array(dungeons.length).fill(false);

    function dfs(count, k) {
        answer.push(count);

        for (let i = 0; i < dungeons.length; i++) {
            let current = dungeons[i];
            if (k >= current[0] && !visited[i]) {
                visited[i] = true;
                dfs(count + 1, k - current[1]);
                visited[i] = 0;
            };
        };
    };

    dfs(0, k);

    return Math.max(...answer);
};

console.log(solution(80, [[80, 20], [50, 40], [30, 10]]));
console.log(solution(40, [[40, 20], [10, 10], [10, 10], [10, 10], [10, 10]]));

