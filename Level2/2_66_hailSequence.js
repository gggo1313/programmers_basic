// 1. 짝수면 2로 나눠준다
// 2. 홀수면 3을 곱하고 1을 더해준다
// 결과값이 1보다 크면 다시 1번부터 반복한다.
// 수열의 번호와 해당하는 값을 좌표평면에 표시
// 구간은 시작점으로부터의 값과 마지막점으로부터의 값으로 표시
// 구간의 시작이 끝보다 나중일 수 있음 이 때는 -1을 return
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


// 다른 사람 풀이
// 시작점부터 넓이의 합을 배열에 넣고, 끝점까지의 결과와 시작점까지의 결과의 차로 구함
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