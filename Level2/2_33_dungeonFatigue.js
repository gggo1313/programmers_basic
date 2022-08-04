// �������� [���� �ּ� �ʿ� �Ƿε�, �Ҹ� �Ƿε�]�� ��� �迭 dungeons
// ���� �Ƿε� k�� �־��� ��, �ִ�� Ž���� �� �ִ� ���� ���� return
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

