// 단어 s의 가운데 글자를 return
// 단어의 길이가 짝수면 가운데 두 글자를 return

function solution (s) {
    return s.length % 2 ? s[Math.floor(s.length / 2)] : s[s.length / 2 - 1] + s[s.length / 2]
};

console.log(solution("abcde"));
console.log(solution("qwer"));

// 다른 사람 풀이
// arr.substr(n, m): arr 문자열의 인덱스 n부터 m개를 반환
function solution2 (s) {
    return s.length % 2 === 0 ? s.substr(s.length / 2 - 1, 2 ) : s.substr(Math.floor(s.length / 2), 1);
}