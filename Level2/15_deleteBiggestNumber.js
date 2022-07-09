// k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 return
function solution (number, k) {
    let answer = '';
    let answerStack = [0];
    let deleteCount = -1;
    for (let i = 0; i < number.length; i++) {
        while (deleteCount < k && number[i] > answerStack[answerStack.length - 1]) {
            answerStack.pop();
            deleteCount++;
        };
        if (answerStack.length < number.length - k) answerStack.push(number[i]);
    };

    answer = answerStack.join('');

    return answer;
};

let number1 = "1924"
let number2 = "1231234"
let number3 = "4177252841"

console.log(solution(number1, 2));
console.log(solution(number2, 3));
console.log(solution(number3, 4));