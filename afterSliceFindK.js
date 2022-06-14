// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬
// 이 배열의 k번째에 있는 수를 구함
// [i, j, k]가 여러개 있는 2차원 배열 commands가 주어짐
// 모든 k번째 수를 배열에 담아 return

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

// 다른 사람 풀이
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command; // 이렇게 선언할 수도 있음
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a, b) => a - b);

        return newArray[position - 1];
    })
};