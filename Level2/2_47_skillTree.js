// �����н��� �ʿ��� ��ųƮ�� ������ �־��� ���ڿ� skill
// �־��� ���ڿ� skill_trees���� ���°� ������ ��ųƮ�� ���� return


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

// �ٸ� ��� Ǯ��
// Array method�� value�� ���������� �޾Ƽ� �Լ��� �ٷ� ����
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