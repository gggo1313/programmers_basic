// 공백으로 구분된 숫자들이 문자열 s에 저장
// "최소값 최대값" 형태의 문자열을 return
function solution (s) {
    let temp = [];
    let arr = s.split(" ");

    temp.push(Math.min(...arr));
    temp.push(Math.max(...arr));

    const answer = temp.join(" ");

    return answer;
};

let s1 = "1 2 3 4";
let s2 = "-1 -2 -3 -4";
let s3 = "-1 -1";

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));

// 다른 사람 풀이
// join 없이 + 로 해결
function solution2 (s) {
    const arr = s.split(' ');

    return Math.min(...arr) + ' ' + Math.max(...arr);
};