// A�� �̷���� �̸��� �ʱⰪ�� ���̽�ƽ�� ����Ͽ� name�� ������ ����
// ���ĺ��� ������, �ڷ� ����(A -> B, A -> Z)
// Ŀ���� �¿�� ����



// function solution (name) {
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const length = name.length;

//     let upDownCount = 0;
//     let leftRightCountList = [length - 1];
    
// };

let name1 = "JEROEN";
let name2 = "JAN";

// console.log(solution(name1));
console.log(solution(name2));

function solution(name) {
    var answer = 0;
    const length = name.length;
    let upDownCount = 0
    let leftRightCountList = [length - 1]//�� �������� �� ���� ��
    for (let i = 0; i < length; i++) upDownCount += minUpOrDownCount(name[i])
    for (let startOfA = 0; startOfA < name.length; startOfA++) {
        let endOfA = startOfA + 1;
        while (endOfA < length && name[endOfA] === 'A') endOfA++;
        const [moveToStartOfA, moveToEndOfA] = [startOfA, length - endOfA]
        leftRightCountList.push(moveToStartOfA * 2 + moveToEndOfA)// 0 -> A.., 0 <- A.., ..A <- -1
        leftRightCountList.push(moveToEndOfA * 2 + moveToStartOfA)//���ۺ��� �ڷ� ���� ��� ..A <- -1, ..A -> -1, 0 -> A..
        console.log("moveToStartOfA: ", moveToStartOfA, "moveToEndOfA: ", moveToEndOfA);
        console.log(leftRightCountList);
    }
    answer = upDownCount + Math.min(...leftRightCountList)
    return answer;
}

function minUpOrDownCount(destination) {
    const Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const index = Alphabet.indexOf(destination)
    return Math.min(index, Alphabet.length - index)
}