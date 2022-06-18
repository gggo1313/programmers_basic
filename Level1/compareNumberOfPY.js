// 문자열 s에 있는 p의 개수와 y의 개수를 비교해 같으면 True, 다르면 False를 return
// s에는 대문자와 소문자가 섞여 있으며, p, y의 개수는 대문자 소문자 구별 없음

function solution (s) {
    const upperA = s.toUpperCase();
    const numP = upperA.split('').filter((item) => {
        return item === "P";
    });
    const numY = upperA.split('').filter((item) => {
        return item === "Y";
    }); 

    return numP.length == numY.length ? true : false;
};

console.log(solution("pPoooyY"));
console.log(solution("PyY"));


// 다른 사람 풀이
// split("X").length 값으로도 비교가 가능함
// 둘의 길이가 같은지 안 같은지로 true, false 반환 가능
function numPY(s) {
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
};

console.log(numPY("pPoopqwpejyuzxcyyyYP"));