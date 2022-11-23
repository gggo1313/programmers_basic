// 1부터 100까지의 숫자 중 임의의 숫자를 뽑아 상자에 순서대로 담은 배열 cards
// 임의의 번호의 상자를 선택하여 나온 숫자의 번호의 상자를 여는 방식
// 이미 열린 상자의 번호가 나오면 이번 시행에서 연 상자를 그루핑
// 첫 번째와 두 번째의 그룹의 상자 수를 곱한 값이 점수
// 최대 점수를 return

function solution (cards) {
    const list = new Map();
    const group = [];

    for (let i = 0; i < cards.length; i++) {
        list.set(i + 1, {number: cards[i], visited: false});
    };

    // 게임 시행
    const play = (start, arr) => {
        // 연 상자에서 나온 번호의 상자가 이미 열려있는지 체크
        const box = list.get(start);

        if (box.visited) return;

        box.visited = true; // 해당 상자 열림 상태로 변경
        arr.push(start); // 해당 상자 번호를 배열에 추가

        play(box.number, arr);
    };


    for (let i = 0; i < list.size; i++) {
        // 그룹의 첫 번째 상자가 이미 열려있는지 체크
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


// 다른 사람 풀이
const record = [0, 0];
const visited = new Set([]);

const recordScore = (score) => {
    // score 값이 record의 두 값 중 하나라도 더 크면 record의 값 중 최소값을 대체
    if (score > record[0] || score > record[1]) {
        const idx = record.indexOf(Math.min(...record));
        record[idx] = score;
    };
};

const dfs = (cards, start, depth = 0) => {
    // 이미 열린 상자이고, depth가 0보다 크면 record에 depth를 기록
    if (visited.has(start)) {
        if (depth) recordScore(depth);
        return;
    };

    // 열린 상태가 아니면
    visited.add(start); // visited에 값 추가(열린 상태)
    dfs(cards, cards[start - 1], depth + 1); // 상자 안에 있던 값으로 다시 시행
};

const solution2 = (cards) => {
    for (let i = 1; i <= cards.length; i++) {
        dfs(cards, i);
        console.log(visited);
    };

    return record[0] * record[1];
};

console.log(solution2(cards1));