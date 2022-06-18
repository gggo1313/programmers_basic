// 문자열로 구성된 리스트 strings와 정수 n이 주어짐
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하여 return

function solution (strings, n) {
    return strings.sort((a, b) => {
        if(a[n] > b[n]) return 1;
        if(a[n] < b[n]) return -1;
        if(a[n] === b[n]) return a < b ? -1 : 1; // 같을 경우 사전 기준으로 정렬
    });
};

const testArr1 = ["sun", "bed", "car"];
const testArr2 = ["abce", "abcd", "cdx"];
console.log("Test1: ", solution(testArr1, 1));
console.log("Test2: ", solution(testArr2, 2));

// 다른 사람 풀이
// n번째 글자가 같을 경우 그냥 비교, 아닐 경우 n번째 글자 비교

function solution2(strings, n) {
    return strings.sort((s1, s2) => {
        s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
    });
};

console.log("Test1: ", solution2(testArr1, 1));
console.log("Test2: ", solution2(testArr2, 2));