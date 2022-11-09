// 시간당 1씩 움직이고, 목표까지의 거리 distance(<= 10000000)가 주어짐
// 각 경비병의 경비 구간이 scope(<=1000), 근무휴식 시간이 times로 주어짐
// 최대로 전진할 수 있는 거리를 return
const isWork = (table) => {
    if (table[0][0] > table[0][1]) {
        table[0] = table[0].sort((a, b) => a - b);
        const temp = table[1].shift();
        table[1].push(temp);
        console.log(table);
    };

    const workRotation = table[1][0] + table[1][1];
    
    for (let i = table[0][0]; i <= table[0][1]; i++) {
        if (i % workRotation === 0) {
            continue;
        } else if (i % workRotation <= table[1][0]) {
            return i;
        };
    };
};

function solution (distance, scope, times) {
    let sortedScopeTime = [];
    let answer = distance;

    for (let i = 0; i < scope.length; i++) {
        sortedScopeTime.push([scope[i], times[i]]);
    };

    sortedScopeTime = sortedScopeTime.sort((a, b) => a[0][0] - b[0][0]);

    for (let i = 0; i < sortedScopeTime.length; i++) {
        const pass = isWork(sortedScopeTime[i]);
        if (!pass) continue;
        else answer = isWork(sortedScopeTime[i]);
    };

    return answer;
};

const dist1 = 10;
const dist2 = 12;
let scope1 = [[3, 4], [8, 5]];
let scope2 = [[7, 8], [4, 6], [11, 10]];
let time1 = [[2, 5], [3, 4]];
let time2 = [[2, 2], [2, 4], [3, 3]];

console.log(solution(dist1, scope1, time1));
console.log(solution(dist2, scope2, time2));