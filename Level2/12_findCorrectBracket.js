// 괄호가 올바르게 감싸고 있으면 올바른 괄호 문자열
// 주어진 문자열 s를 왼쪽으로 x칸만큼 회전시켰을 때
// s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return
function solution (s) {
    if (s.length % 2 === 1) return 0;
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        let str = s.slice(i) + s.slice(0, i);
        const stack = [];
        let flag = 1;

        for (let n of str) {
            if (n === "(" || n === "{" || n === "[") stack.push(n);
            else {
                const bracket = stack.pop(); 
                if (n === ")" && bracket === "(") continue;
                if (n === "}" && bracket === "{") continue;
                if (n === "]" && bracket === "[") continue;
                flag = 0;
                break;
            };
        };

        if (flag) answer++;
    };
    return answer;
};

const s1 = "[](){}";
const s2 = "}]()[{";
const s3 = "[)(]";
const s4 = "}}}";

console.log(solution2(s1));
console.log(solution2(s2));
console.log(solution2(s3));
console.log(solution2(s4));

// 다른 사람 풀이
// object화 해서 매핑을 시켜 놓고 간단히 비교
function solution2 (s) {
    if (s.length % 2 === 1) return 0;
    let answer = 0;
    const mapping = {"}" : "{", "]" : "[", ")" : "("};

    for (let i = 0; i < s.length; i++) {
        let str = s.slice(i) + s.slice(0, i);
        const stack = [];
        let flag = 1;

        for (let n of str) {
            if (n === "(" || n === "{" || n === "[") stack.push(n);
            else {
                const bracket = stack.pop(); 
                if (bracket !== mapping[n]) {
                    flag = 0;
                    break;
                };                
            };
        };

        if (flag) answer++;
    };
    return answer;
};