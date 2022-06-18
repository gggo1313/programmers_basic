// 길이가 n이고 패턴이 "수박수박수..."인 문자열을 return

function solution (n) {
    let answer = '';

    for (let i = 0; i < n; i++) {
        answer += i % 2 ? "박" : "수";
    };

    return answer;
};

console.log(solution(7));

// 다른 사람 풀이
const waterMelon = n => "수박".repeat(n).slice(0, n);