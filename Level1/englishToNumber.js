// 숫자를 영어나 숫자 그대로 작성한 문자열 s
// 원래 숫자를 return
function solution (s) {    
    const answer = s.replace(/zero/g, 0)
                    .replace(/one/g, 1)
                    .replace(/two/g, 2)
                    .replace(/three/g, 3)
                    .replace(/four/g, 4)
                    .replace(/five/g, 5)
                    .replace(/six/g, 6)
                    .replace(/seven/g, 7)
                    .replace(/eight/g, 8)
                    .replace(/nine/g, 9)
    
    return Number(answer);
};

let s1 = "one4seveneight";
let s2 = "23four5six7";
let s3 = "2three45sixseven";
let s4 = "123";

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));

// 다른 사람 풀이
// replace와 정규식을 사용하지 않음
function solution2 (s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for (let i = 0; i < numbers.length; i++) {
        // 바꾸고자 하는 영어숫자를 기준으로 자름
        let arr = answer.split(numbers[i]);
        // 잘라진 배열을 바꾸려는 숫자로 붙임
        answer = arr.join(i);

    };

    return Number(answer);
};

console.log(solution2(s1));
console.log(solution2(s2));
console.log(solution2(s3));