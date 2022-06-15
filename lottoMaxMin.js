// 알아볼 수 없는 번호를 0으로 표기한 배열 lottos
// 당첨번호 배열 win_nums와 비교하여 
// 가질 수 있는 최대 등수와 최저 등수를 차례대로 배열에 담아서 return

function solution (lottos, win_nums) {
    let countOf0 = 0;
    let minPrice = 7;
    
    for (let i = 0; i < win_nums.length; i++) {
        if(lottos.includes(win_nums[i])) minPrice--;
        if(lottos[i] === 0) countOf0++;
    };

    let maxPrice = minPrice - countOf0

    if (minPrice == 7) minPrice = 6;
    if (maxPrice > 5) maxPrice = 6;

    return [maxPrice, minPrice];
};

const lottos1 = [44, 1, 0, 0, 31, 25];
const lottos2 = [0, 0, 0, 0, 0, 0];
const lottos3 = [20, 9, 3, 45, 4, 35];

const win_nums1 = [31, 10, 45, 1, 6, 19];
const win_nums2 = [38, 19, 20, 40, 15, 25];
const win_nums3 = [20, 9, 3, 45, 4, 35];

console.log(solution(lottos1, win_nums1));
console.log(solution(lottos2, win_nums2));
console.log(solution(lottos3, win_nums3));

// 다른 사람 풀이
// rank에 6을 2개 넣어서 편하게 계산한 풀이
function solution2 (lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
};