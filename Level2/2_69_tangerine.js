// 귤의 배열 tangerine
// 판매하려는 귤의 개수 k
// 판매하려는 귤의 종류의 최소값을 return

const solution = (k, tangerine) => {
    let classified = {};
    let count = 0;

    for (let i = 0; i < tangerine.length; i++) {
        classified[tangerine[i]] = (classified[tangerine[i]] || 0) + 1;
    };

    console.log(classified);

    let sorted = Object.entries(classified).sort(([, a], [, b]) => a - b);
    console.log(sorted);

    for (let i = 1; i <= sorted.length; i++) {
        if (k <= 0) return count;

        k -= sorted[sorted.length - i][1];
        count++;
    };
};

const t1 = [1, 3, 2, 5, 4, 5, 2, 3];
const t2 = [1, 3, 2, 5, 4, 5, 2, 3];
const t3 = [1, 1, 1, 1, 2, 2, 2, 3]
console.log(solution(6, t1));
console.log(solution(4, t2));
console.log(solution(2, t3));