// 0과 1로 이루어진 문자열 x
// x의 모든 0을 제거한 후의 길이를 2진법으로 표현한 문자열로 변환
// 주어진 문자열 s에 이진 변환을 할 때,
// 1이 될 때까지의 변환 횟수와 제거된 0의 개수를 배열에 담아 return
function solution (s) {
    let numOf0 = 0;
    let count = 0;

    while (s !== "1") {
        let prev = s.length;
        
        s = s.match(/1/g).join("");

        let cur = s.length;
        s = cur.toString(2);

        numOf0 += prev - cur;
        count++;
    };

    return [count, numOf0];
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
