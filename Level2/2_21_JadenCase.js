// 맨 앞 글자만 대문자이고 나머지는 소문자로 만드는 것이 JadenCase
// 숫자, 알파벳, 공백만 있는 문자열 s가 주어졌을 때 s를 JadenCase로 return


function solution (s) {
    s = s.toLowerCase();
    const answer = [];
    let arr = s.split(" ").map(v => v.split(""));

    for (let up of arr) {
        // 빈 문자열인 경우 패스
        // 문자열이 존재하는 경우 시행
        if (up[0]) up[0] = up[0].toUpperCase();
        
        answer.push(up.join(""));
    };

    return answer.join(" ");
};

// console.log(solution("3people unFollowed me"));
// 결과값에도 공백문자 개수는 유지되어야 하는 것을 몰랐음
// 문자열에 값이 없는 것을 Array.join(" ")으로 합쳤을 때
// 이전 공백문자 개수 그대로 합쳐지는 것도 몰랐음

console.log(solution3("a    a a  a   a"))

// 다른 사람 풀이
function solution2 (s) {
    s = s.toLowerCase()
    var answer = s.split(" ").map(s => {
        let arr = s.split("")
        if(arr[0] != null)
           arr[0] = arr[0].toUpperCase();
        return arr.join('');
    });

    console.log(answer);

    return answer.join(" ");
};

// 배열 인덱스로 접근하면 빈 문자열이 undefined로 발동하여 string.toUpperCase()가 런타임 오류
// charAt으로 접근하면 빈 문자열을 빈 문자열로 반환
function solution3 (s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}