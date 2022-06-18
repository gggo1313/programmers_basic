// 자연수 n이 매개변수로 주어진다.
// n을 3진법 상에서 앞뒤로 뒤집는다.
// 이를 다시 10진법으로 표현하여 return

// num.toString(3) 3진법으로 변경

function solution (n) {
    let temp = n.toString(3);
    let str = String(temp);
    let strReverse = str.split("").reverse().join("");

    let result = 0;
    for(let i = 0; i < strReverse.length; i++) {
        const leng = strReverse.length;
        result += strReverse[i] * Math.pow(3, (leng - i - 1));
        // console.log(result);
    };

    const answer = result;
    return answer;

};

const a = 45;
const b = 125;

solution(a);
solution(b);

// 다른 사람 답

const answer = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
};

console.log(answer(a));
console.log(answer(b));