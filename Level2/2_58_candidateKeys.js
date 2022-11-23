// 유일성과 최소성을 만족하는 키의 조합 개수를 return
function solution(relation) {
    let idxArr = Array.from(Array(relation[0].length), (v, i) => i);

    const combinations = [];

    for (let i = 0; i < idxArr.length; i++) {
        combinations.push(...getCombination(idxArr, i + 1));
    };

    console.log(combinations);

    combinations = checkUniqueness(relation, combinations);

    console.log(combinations);
};

function checkUniqueness(relation, combinations) {
    const result = [];

    combinations.forEach((combination) => {
        let set = new Set();
        relation.forEach((rel) => {
            set.add(combination.map(combi => rel[combi]).join(','));
        });

        if (set.size === relation.length) {
            result.push(combination);
        };
    });

    return result;
};

function getCombination(arr, selectNum) {
    const result = [];
    if (selectNum === 1) {
        return arr.map(a => [a]);
    };

    arr.forEach((fix, i, origin) => {
        const rest = origin.slice(i + 1);
        const combi = getCombination(rest, selectNum - 1);
        const attach = combi.map((c) => [fix, ...c]);
        result.push(...attach);
    });

    return result;
};

const relation1 = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]];

console.log(solution(relation1));