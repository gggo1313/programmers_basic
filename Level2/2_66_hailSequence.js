// 1. ¦���� 2�� �����ش�
// 2. Ȧ���� 3�� ���ϰ� 1�� �����ش�
// ������� 1���� ũ�� �ٽ� 1������ �ݺ��Ѵ�.
// ������ ��ȣ�� �ش��ϴ� ���� ��ǥ��鿡 ǥ��
// ������ ���������κ����� ���� �����������κ����� ������ ǥ��
// ������ ������ ������ ������ �� ���� �� ���� -1�� return
function solution (k, ranges) {
    const graph = [k];
    const area = [];
    const answer = [];

    const hail = (num, result) => {
        if (num === 1) return;

        if (num % 2) {
            const next = num * 3 + 1;
            area.push((graph[graph.length - 1] + next) / 2);
            result.push(next);
            hail(next, result);
        } else {
            const next = num / 2;
            area.push((graph[graph.length - 1] + next) / 2);
            result.push(next);            
            hail(next, result);
        };
    };

    hail(k, graph);

    ranges.forEach((v) => {
        const endPoint = graph.length + v[1] - 1;

        if (v[0] > endPoint) {
            const result = -1;
            answer.push(parseFloat(result.toFixed(1)));
        } else if (v[0] === endPoint) {
            const result = 0;
            answer.push(result.toFixed(1));
        } else {
            const range = area.slice(v[0], endPoint);
            const integration = range.reduce((prev, cur) => prev + cur, 0);

            answer.push(integration.toFixed(1));
        }
    });

    return answer;
};

const ranges1 = [[0,0],[0,-1],[2,-3],[3,-3]];

console.log(solution(5, ranges1));


// �ٸ� ��� Ǯ��
// ���������� ������ ���� �迭�� �ְ�, ���������� ����� ������������ ����� ���� ����
function solution2 (k, ranges) {
    const answer = [];
    const integral = [0];
    let prev = k;
    let cur = k;

    while (true) {
        if (prev === 1) {
            break;
        };

        if (prev % 2 === 1) {
            cur = prev * 3 + 1;
        } else {
            curr = prev / 2;
        };

        integral.push((cur + prev) / 2 + integral[integral.length - 1]);
        prev = cur;
    };

    for (let i = 0; i < ranges.length; i++) {
        const [a, b] = ranges[i];

        if (a <= integral.length - 1 + b) {
            answer.push(integral[integral.length - 1 + b] - integral[a]);
        } else {
            answer.push(-1);
        };
    };

    return answer;
};