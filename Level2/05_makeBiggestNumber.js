// 숫자 배열 numbers의 원소를 이어 붙여 만들 수 있는 가장 큰 수를 문자열로 return
function solution (numbers) {
    if (numbers.reduce((acc, cur) => acc + cur) === 0) return "0";
    
    const stringed = numbers.map(e => String(e));

    return answer = stringed.sort((a, b) => (b + a) - (a + b)).join("");
};

const numbers1 = [6, 10, 2];
const numbers2 = [3, 30, 34, 5, 9];
console.log(solution(numbers1));
console.log(solution(numbers2));


// function solution (numbers) {
//     const answer = [];

//     const stringed = numbers.map(e => String(e));
//     console.log(stringed);
//     const isSame = (a, b, i) => {
//         let min = Math.min(a.length, b.length);
//         console.log("i: ", i, "Min: ", min);
//         console.log("a: ", a[i], "b: ", b[i]);

//         if (i === min + 1) return b[i - 1] - a[i - 1];
//         if (a[i] === b[i]) {
//             if (a.length === b.length) return b - a;
//             else {
//                 if (a.length > b.length) {
//                     if (a[i + 1] < a[i]) return b[i];
//                     else return a[i];
//                 } else if (b.length < a.length) {
//                     if (b[i + 1] < b[i]) return a[i];
//                     else return b[i];
//                 };

//                 console.log("Same!", "i: ", i);
//                 isSame(a, b, i + 1);
//             }
            
            
//         } 
//     };

//     const sorted = stringed.sort((a, b) => {
//         return isSame(a, b, 0);
//     });

//     console.log("Sort: ", sorted);
        

//     return sorted.reduce((acc, cur) => acc + cur);
// };

// console.log(["3", "30", "34"].sort((a, b) => b[1] - a[1]));
// console.log("3" + "3");

