// 주어진 문자열 s의 길이가 4 혹은 6이고, 
// 숫자로만 구성되어 있으면 True 아니면 false를 return

function solution (s) {
    if (s.length != 4 && s.length != 6) {
       return false;
    };

    for (let i = 0; i < s.length; i++) {
        if(isNaN(s[i])) {
            return false;
        };
    }

    return true;
};

console.log(solution("a1234"));
console.log(solution("1234"));
console.log(solution("-234"));

// 음의 정수는 false로 반환되어야 하는 조건이 있었음

// 다른 사람 풀이
function solution2 (s) {
    if(s * 1 + '' == s && Math.abs(5 - s.length) === 1) return true;
    // 숫자로만 이어졌는지 확인하는 방법을 s * 1 + '' == s
    // 문자열의 길이가 4 혹은 6을 확인하는 방법을 Math.abs(5 - s.length === 1)
    return false;
};