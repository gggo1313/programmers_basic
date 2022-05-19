// 정수 n의 각 자리수를 큰 것부터 작은 순으로 정렬한 새로운 정수를 return

function solution (n) {
    const arr = String(n).split('');
    // console.log(arr);
    const answer = Number(arr.sort((a, b) => b - a).join(""));
    return answer;
}

console.log(solution(118372));

// 다른 사람 답변
// 숫자 + "" 으로 string 변환
// 자리수이기 때문에 모든 요소가 한 자리수이므로 
// sort() 만으로도 오름차순 정렬할 수 있음
function solution2 (n) {
    const newN = n + "";
    const newArr = newN
        .split("")
        .sort()
        .reverse()
        .join("");
    return +newArr;
}

function solution3 (n) {
    return parseInt((n + "").split("").sort().reverse().join(""));
    // parseInt말고도 * 1로 숫자형 변환 가능
    // return (n + "").split("").sort().reverse().join("") * 1
}

console.log("2: ", solution2(118372));
console.log("3: ", solution3(118372));