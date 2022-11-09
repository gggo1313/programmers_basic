// 균형잡힙 문자열: "("와 ")"의 개수가 같은 문자열
// 올바른 문자열: 균형 잡힌 문자열 중 첫번째 문자와 끝 문자로 괄호를 닫을 수 있는 문자열
// 주어진 문자열 p는 "("와 ")"로만 이루어진 길이 1000이하 짝수인 균형잡힌 문자열
// 1. p가 빈 문자열이면 빈 문자열 return
// 2. 문자열 p를 두 균형잡힌 문자열 u, v 로 나누는데 u는 최소값
// 3. u가 올바른 문자열이 아니라면 u의 맨 앞, 뒤 문자를 제거하고 
// 나머지 문자 괄호 방향을 바꾼 후, 앞 뒤에 ( 와 )를 붙여줌
// 반복하여 문자열 p를 올바른 문자열로 변환하여 return

function solution (p) {
    if (!p.length) return p;
    let isCorrect = true;
    let count = 0;

        for (let i = 0; i < p.length; i++) {
            if (count < 0) isCorrect = false;
            if (p[i] === "(") count++;
            else if (p[i] === ")") {
                count--;
            };

            if (count === 0) {
                const [u, v] = [p.slice(0, i + 1), p.slice(i + 1)];
                
                if (isCorrect) {
                    return u + solution(v)
                } else {
                    let emptyString = "(" + solution(v) + ")"
                    const reverseBracket = u
                        .slice(1, u.length - 1)
                        .split('')
                        .map((bracket) => bracket === "(" ? ")" : "(")
                        .join("");

                    return emptyString + reverseBracket;
                };
            };
        };
};

const p1 = "(()())()";
const p2 = ")(";
const p3 = "()))((()";
const p4 = "))))((((";

// console.log(solution(p1));
// console.log(solution(p2));
console.log(solution(p4));

// 다른 사람 풀이
// while do 사용으로 한 줄 풀이
function reverse(str) {
    return str.slice(1, str.length - 1).split("").map((v) => v === "(" ? ")" : "(").join("");
};

function solution2(p) {
    if (p.length < 1) return "";

    let balance = 0;
    let pivot = 0;
    do {balance += p[pivot++] === "(" ? 1 : -1} while (balance !== 0);

    const [u, v] = [p.slice(0, pivot), solution(p.slice(pivot, p.length))];

    if (u[0] === "(") return u + v;
    else return "(" + v + ")" + reverse(u);
};