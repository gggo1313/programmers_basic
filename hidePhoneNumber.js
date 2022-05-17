// 핸드폰 번호 문자열(phone_number)이 주어졌을 때
// 뒤 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 return

// 뒤의 네 개를 제외하고 splice
// 자른 개수만큼 * 추가
function solution (phone_number) {
    const toBeHide = phone_number.length - 4;
    const arr = phone_number.split('');
    arr.splice(0, toBeHide);

    for(let i = 0; i < toBeHide; i++) {
        arr.unshift("*");
    }

    const answer = arr.join("");

    return answer;
}

const phone_number1 = "01033334444";
const phone_number2 = "027778888";

solution(phone_number1);
solution(phone_number2);

// 정규식 풀이
function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
}

console.log("Result: " + hide_numbers(phone_number1));
console.log("Result: " + hide_numbers(phone_number2));

// 다른 풀이 - repeat이 있었다!
function hide_numbers2(s) {
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    
    return result;
}

console.log("Result: " + hide_numbers2(phone_number1));
console.log("Result: " + hide_numbers2(phone_number2));