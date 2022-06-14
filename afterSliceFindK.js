// �迭 array�� i��° ���ں��� j��° ���ڱ��� �ڸ��� ����
// �� �迭�� k��°�� �ִ� ���� ����
// [i, j, k]�� ������ �ִ� 2���� �迭 commands�� �־���
// ��� k��° ���� �迭�� ��� return

function solution (array, commands) {
    const answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        let temp = array
            .slice(commands[i][0] - 1, commands[i][1])
            .sort((a, b) => a - b)
        answer.push(temp[commands[i][2] - 1]);        
    };

    return answer;
};

let array1 = [1, 5, 2, 6, 3, 7, 4]
const commands1 = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

console.log(solution(array1, commands1));

// �ٸ� ��� Ǯ��
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command; // �̷��� ������ ���� ����
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a, b) => a - b);

        return newArray[position - 1];
    })
};