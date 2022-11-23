// 실려야 되는 택배 순서 배열 order
// 보조 컨베이어 벨트에 임시로 보관할 수 있음
// 보조 컨베이어 벨트에서 꺼낼 때는 가장 마지막에 넣은 것만 꺼낼 수 있음
// 더 이상 택배를 실을 수 없으면 실은 상자의 개수를 return

const solution = (order) => {
    const conveyor = [];
    const subConveyor = [];
    let count = 0;

    for (let i = 0; i < order.length; i++) {
        if (conveyor.includes(order[i])) {
            while (subConveyor[0] !== order[i]) {
                const temp = conveyor.shift();
                subConveyor.unshift(temp);
                console.log("Temp: ", temp, "conveyor: ", conveyor, "sub: ", subConveyor);
            };
        };

        if (subConveyor[0] === order[i]) {
            subConveyor.shift();
            count++;
        } else break;
    };

    return count;
};

console.log(solution2([4, 3, 1, 2, 5]));
console.log(solution2([5, 4, 3, 2, 1]));

// 계산수 이슈로 다른사람 풀이 참고
function solution2 (order) {
    let idx = 0;
    const stack = [];

    for (let i = 1; i <= order.length; i++) {
        stack.push(i);

        while (stack.length > 0 && stack[stack.length - 1] === order[idx]) {
            stack.pop();
            idx++;
            console.log("Stack: ", stack, "Post:", order[idx]);
        };
    };

    return idx;
}