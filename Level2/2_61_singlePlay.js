// 1���� 100������ ���� �� ������ ���ڸ� �̾� ���ڿ� ������� ���� �迭 cards
// ������ ��ȣ�� ���ڸ� �����Ͽ� ���� ������ ��ȣ�� ���ڸ� ���� ���
// �̹� ���� ������ ��ȣ�� ������ �̹� ���࿡�� �� ���ڸ� �׷���
// ù ��°�� �� ��°�� �׷��� ���� ���� ���� ���� ����
// �ִ� ������ return

function solution (cards) {
    const list = new Map();
    const group = [];

    for (let i = 0; i < cards.length; i++) {
        list.set(i + 1, {number: cards[i], visited: false});
    };

    // ���� ����
    const play = (start, arr) => {
        // �� ���ڿ��� ���� ��ȣ�� ���ڰ� �̹� �����ִ��� üũ
        const box = list.get(start);

        if (box.visited) return;

        box.visited = true; // �ش� ���� ���� ���·� ����
        arr.push(start); // �ش� ���� ��ȣ�� �迭�� �߰�

        play(box.number, arr);
    };


    for (let i = 0; i < list.size; i++) {
        // �׷��� ù ��° ���ڰ� �̹� �����ִ��� üũ
        const check = list.get(i + 1);

        if (check.visited) continue;

        const playGroup = [];
        play(cards[i], playGroup);

        console.log(playGroup);

        group.push(playGroup);
    };
    console.log(list);

    group.sort((a, b) => b.length - a.length);

    return group.length === 1 ? 0 : group[0].length * group[1].length;
};

const cards1 = [8,6,3,7,2,5,1,4];
// console.log(solution(cards1));


// �ٸ� ��� Ǯ��
const record = [0, 0];
const visited = new Set([]);

const recordScore = (score) => {
    // score ���� record�� �� �� �� �ϳ��� �� ũ�� record�� �� �� �ּҰ��� ��ü
    if (score > record[0] || score > record[1]) {
        const idx = record.indexOf(Math.min(...record));
        record[idx] = score;
    };
};

const dfs = (cards, start, depth = 0) => {
    // �̹� ���� �����̰�, depth�� 0���� ũ�� record�� depth�� ���
    if (visited.has(start)) {
        if (depth) recordScore(depth);
        return;
    };

    // ���� ���°� �ƴϸ�
    visited.add(start); // visited�� �� �߰�(���� ����)
    dfs(cards, cards[start - 1], depth + 1); // ���� �ȿ� �ִ� ������ �ٽ� ����
};

const solution2 = (cards) => {
    for (let i = 1; i <= cards.length; i++) {
        dfs(cards, i);
        console.log(visited);
    };

    return record[0] * record[1];
};

console.log(solution2(cards1));