// �Ƿ��� �Ǵ� �ù� ���� �迭 order
// ���� �����̾� ��Ʈ�� �ӽ÷� ������ �� ����
// ���� �����̾� ��Ʈ���� ���� ���� ���� �������� ���� �͸� ���� �� ����
// �� �̻� �ù踦 ���� �� ������ ���� ������ ������ return

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

// ���� �̽��� �ٸ���� Ǯ�� ����
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