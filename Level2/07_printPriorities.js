// �μ� ��⿭�� �μ� �켱 ������ ǥ�� priorities
// �μ� ��⿭ ���� �տ� �ִ� �������� �� �켱���� ���� ������ �ڿ� ������ 
// ���� �տ� �ִ� ������ ���� �ڿ� ����
// ���� ��û�� ����(location)�� �� ��°�� �μ�Ǵ��� return
function solution (priorities, location) {
    const answer = [];
    const indexOrder = priorities.map((e, i) => [i, e]);

    const print = (prior, order) => {
        console.log("prior: ", prior, "order: ", order);
        if (Math.max(...prior) !== prior[0]) {
            order.push(order[0]);
            order.shift();
            prior.push(prior[0]);
            prior.shift();
            console.log("After1");
            console.log("prior: ", prior, "order: ", order);
            console.log("")
        } else {
            answer.push(order[0]);
            order.shift();
            prior.shift();
            console.log("After2");
            console.log("prior: ", prior, "order: ", order);
            console.log("")
        };

        console.log(answer);

        if(order.length > 0) print(prior,order);
    };

    print(priorities, indexOrder);

    return answer.findIndex(e => e[0] === location) + 1;
};

let p1 = [2, 1, 3, 2];
let p2 = [1, 1, 9, 1, 1, 1];

console.log(solution(p1, 2));
console.log(solution(p2, 0));

// �ٸ� ��� Ǯ��
// object�� Ǯ��
// arr.some(e => condition) �� ��Ұ� condition�� �����ϸ� true�� return
function solution2(priorities, location) {
    var list = priorities.map((t, i) => ({
        my : i === location, // my�� value�� ã�� �͸� true, �ƴѰŴ� false
        val : t,
    }));

    console.log(list);

    var count = 0;
    while(true) {
        // �� ���� ����Ʈ��
        var cur = list.shift();
        // �� ���� ����Ʈ���� �켱���� ���� ������
        if (list.some(e => e.val > cur.val)) { 
            list.push(cur);
        }
        else {
            count++;
            // ���� ����Ʈ�ϴ°� my����
            if(cur.my) return count; // 
        }
    }
}

console.log(solution2(p1, 2));
console.log(solution2(p2, 0));