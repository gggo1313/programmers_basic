// 문자열 s는 한 개 이상의 단어로 구성된 string
// 각 단어의 홀수번째 문자는 소문자, 짝수번째 문자는 대문자로 문자열을 return

function solution (s) {
    let arr = s.split(' ');
    let answer = [];
    console.log(arr);
    console.log(arr[0]);
    console.log(arr[0].split(' '));
    for (let i = 0; i < arr.length; i++) {
        answer.push(arr[i].split('').map((cur, j) => j % 2 ? cur.toLowerCase() : cur.toUpperCase()).join(''))
    }

    return answer.join(" ");
};

console.log(solution("try hello world"));

// 다른 사람 풀이

function toWeirdCase(s) {
    return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j.toLowerCase()).join('')).join(' ');
};