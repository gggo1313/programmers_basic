// 각 자리수의 합으로 나누어질 수 있는 수 x는 하샤드 수
// 입력받은 자연수 x가 하샤드 수인지 판별하는 함수
// true, false를 return

function solution (x) {
    const arr = String(x).split(""); // split()에 "" 해야 스트링이 짤림
    let sumOfDigits = 0;
    arr.forEach(item => {
        sumOfDigits += Number(item);
    });
    console.log(sumOfDigits);

    return x % sumOfDigits === 0 ? true : false; 
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));

// 다른 사람 풀이
function Harshad (n) {
    return !(n % (n + "").split("").reduce((a, b) => +b + +a));
};

console.log("isHarshad: " + Harshad(148));

function solution2 (x) {
    let num = x;
    let sum = 0;
    do {
        sum += x % 10;
        x = Math.floor(x / 10);
    } while (x > 0) ;

    return !(num % sum);
}

console.log(solution2(130));
