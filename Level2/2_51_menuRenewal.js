// �մ� 2���̻��� ���� ������ �ڽ��޴��� ������
// �մ��� �ֹ��� �޴� �迭 orders
// �ڽ��޴��� ���� �� �ִ� ��ǰ �޴� ������ ��� �迭 course
// ���� �߰��� �ڽ��޴��� ������ string���� �迭�� ��� return
function solution (orders, course) {
    let menu = new Map();

    orders.map(order => {
        course.map(cnt => combination(menu, order, cnt, 0, []));
    });

    menu = [...menu.entries()].filter(element => element[1] >= 2);

    let result = [];
    course.map(cnt => {
        let max = 0;
        let tmp = menu.filter(([str, num]) => {
            if (max < num && str.length === cnt) max = num;
            return str.length === cnt;
        });

        tmp.filter(x => x[1] === max).map(x => result.push(x[0]));
    });

    return result.sort();
}

function combination (menu, order, cnt, idx, prev) {
    if (prev.length === cnt) {
        let curStr = prev.sort().join('');

        if (menu.has(curStr)) menu.set(curStr, menu.get(curStr) + 1);
        else menu.set(curStr, 1);
    };

    for (let i = idx; i < order.length; i++) {
        combination(menu, order, cnt, i + 1, [...prev, order[i]]);
    };
};

const orders1 = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const orders2 = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
const orders3 = ["XYZ", "XWY", "WXA"];

const course1 = [2, 3, 4];
const course2 = [2, 3, 5];


console.log(solution(orders1, course1));

// �ٸ� ��� Ǯ��
function solution2 (orders, course) {
    const ordered = {};
    const candidates = {};
    const maxNum = Array(10 + 1).fill(0);

    const createSet = (arr, start, len, foods) => {
        if (len === 0) {
            ordered[foods] = (ordered[foods] || 0) + 1;

            if (ordered[foods] > 1) candidates[foods] = ordered[foods];
            maxNum[foods.length] = math.max(maxNum[foods.length], ordered[foods]);
            return;
        };

        for (let i = start; i <arr.length; i++) {
            createSet(arr, i + 1, len - 1, foods + arr[i]);
        };
    };

    orders.forEach((od) => {
        const sorted = od.split('').sort();

        course.forEach((len) => {
            createSet(sorted, 0, len, '');
        });
    });

    const launched = Object.keys(candidates).filter(
        (food) => maxNum[food.length] === candidates[food]
    );

    return launched.sort();
};