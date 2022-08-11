// '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 올바른 괄호
// 주어진 문자열 s가 주어졌을 때 문자열 s가 올바른 괄호이면 true, 아니면 false
function solution (s) {
    let pair = 0;

    for (const bracket of s) {
        if (bracket === '(') pair += 1;
        if (bracket === ')') pair -= 1;
        if (pair < 0) return false;
    }

    return pair === 0;
};

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
console.log(solution("())()(()"));

// 다른 사람 풀이
// s에 '('와 ')'만 있다는 것을 이용하여 좀 더 간단하게 판별
function solution2 (s) {
    let cum = 0;
    for (let paren of s) {
        cum += paren === '(' ? 1 : -1;
        if (cum < 0) {
            return false;
        };
    };

    return cum === 0 ? true : false;
}