// 문자열 s를 숫자로 변환한 결과를 return
// 문자열 s의 길이는 1 ~ 5
// s는 부호와 숫자로만 이루어진 문자열

function solution (s) {
    const result = parseInt(s);
    return result;
};

console.log(solution("1234"));
console.log(solution("-1234"));

// 다른 사람풀이
// Number(), parseInt() 미사용

function strToInt(str) {
    return str/1
};

function strToInt2(str) {
    return +str;
};