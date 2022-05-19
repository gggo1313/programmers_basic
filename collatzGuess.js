// 입력된 수가 짝수라면 2로 나눔
// 입력된 수가 홀수라면 3을 곱하고 1을 더함
// 1이 될 때까지 반복
// 몇 번 반복했는지를 return
// 500번을 반복해도 1이 되지 않는다면 -1을 return

function solution (num) {
    let count = 0;
    while(num != 1) {
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }

        count += 1;
        if (count == 500) {
            break;
        }
    }
  
    console.log(count);

    if (count < 500) {
        return count;
    } else {
        return -1;
    }
};

console.log("return: " + solution(6));
console.log("return: " + solution(8));
console.log("return: " + solution(626331));

// 다른 사람 답변
function collatz(num) {
    let answer = 0;
    while(num != 1 && answer != 500) {
        num % 2 == 0 ? num = num / 2 : num = num * 3 + 1;
        answer++;
    }

    return num == 1 ? answer : -1;
}

function collatz2(num, count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : collatz2(num % 2 == 0 ? num = num / 2 : num = num * 3 + 1, ++count);
}

console.log(collatz(62));
console.log(collatz2(62));