// 정수 num이 짝수일 경우 "Even"을 반환
// 홀수일 경우 "Odd" 반환
// num이 정수이므로 음수일 경우도 생각해줘야 함

function odd_even (num) {
    const abs_num = Math.abs(num);
    return abs_num % 2 === 1 ? "Odd" : "Even";
}

console.log(odd_even(-4));
console.log(odd_even(3));
console.log(odd_even(0));

// 다른 사람 답변
function evenOrOdd(num) {
    return num % 2 ? "Odd" : "Even";
}
