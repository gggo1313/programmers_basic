// A로 이루어진 이름의 초기값을 조이스틱을 사용하여 name의 값으로 변경
// 알파벳을 앞으로, 뒤로 조작(A -> B, A -> Z)
// 커서를 좌우로 조작



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
    let leftRightCountList = [length - 1]//한 방향으로 쭉 갔을 때
    for (let i = 0; i < length; i++) upDownCount += minUpOrDownCount(name[i])
    for (let startOfA = 0; startOfA < name.length; startOfA++) {
        let endOfA = startOfA + 1;
        while (endOfA < length && name[endOfA] === 'A') endOfA++;
        const [moveToStartOfA, moveToEndOfA] = [startOfA, length - endOfA]
        leftRightCountList.push(moveToStartOfA * 2 + moveToEndOfA)// 0 -> A.., 0 <- A.., ..A <- -1
        leftRightCountList.push(moveToEndOfA * 2 + moveToStartOfA)//시작부터 뒤로 가는 경우 ..A <- -1, ..A -> -1, 0 -> A..
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