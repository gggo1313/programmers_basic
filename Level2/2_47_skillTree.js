// 선행학습이 필요한 스킬트리 순서가 주어진 문자열 skill
// 주어진 문자열 skill_trees에서 배우는게 가능한 스킬트리 수를 return


function solution (skill, skill_trees) {
    let result = 0;

    let filteredTrees = skill_trees.map(s => {
        return s.split("").filter(v => skill.includes(v))
    });

    console.log(filteredTrees);

    for (let i = 0; i < filteredTrees.length; i++) {
        let isValid = true;

        for (let j = 0; j < filteredTrees[i].length; j++) {
            if (skill[j] !== filteredTrees[i][j]) {
                isValid = false;
                break;
            };
        };

        if (isValid) result++;
    };

    return result;
};

let skill_trees1 = ["BACDE", "CBADF", "AECB", "BDA"];

console.log(solution("CBD", skill_trees1));

// 다른 사람 풀이
// Array method의 value를 변수값으로 받아서 함수를 바로 실행
function solution2 (skill, skill_trees) {
    function isCorrect (n) {
        let test = skill.split('');
        for (let i = 0; i < n.length; i++) {
            if (!skill.includes(n[i])) continue;
            if (n[i] === test.shift()) continue;
            return false;
        };
        return true;
    };
    console.log(skill_trees)

    return skill_trees.filter(isCorrect).length;
};

console.log(solution2("CBD", skill_trees1));