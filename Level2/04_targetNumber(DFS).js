// �־��� ���� �迭 numbers�� ������ �� ��ȣ�� �����ϸ鼭 
// �� ������ �� Ÿ�� �ѹ��� ����� ����� ���� return
function solution (numbers, target) {
    let answer = 0;

    const dfs = (level, sum) => {
        if (level === numbers.length) {
            if (sum === target) {
                answer += 1;
            };
            return;
        };

        dfs(level + 1, sum + numbers[level]);
        dfs(level + 1, sum - numbers[level]);
    };

    dfs(0, 0);

    return answer;
};

let numbers1 = [1, 1, 1, 1, 1];
let numbers2 = [4, 1, 2, 1];

console.log(solution(numbers1, 3));
console.log(solution(numbers2, 4));