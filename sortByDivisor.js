// array의 각 element 중 divisor로 나누어 떨어지는 값을 
// 오름차순으로 정렬한 배열을 return
// divisor로 나누어 떨어지는 element가 없다면 [-1]을 return

function solution (arr, divisor) {
    const filtered = arr.filter((element) => {
        return element % divisor === 0;
        });

    if (filtered.length === 0) return [-1];

    return filtered.sort((a, b) => a - b);
    // 그냥 sort 하면 5보다 10이 낮음으로 나타남
    // 정렬하는 요소를 문자열로 취급 (5 > 1)
};

const arr1 = [5, 9, 7, 10];
const arr2 = [2, 36, 10, 3];
const arr3 = [3, 2, 6];

console.log(solution(arr1, 5));
console.log(solution(arr2, 1));
console.log(solution(arr3, 10));

// 다른 사람 풀이
// map을 사용하는 방법
// arr.map(fn): 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
function solution2 (arr, divisor) {
    var answer = [];
    arr.map((o) => {
        o % divisor === 0 && answer.push(o);
    });

    return answer.length ? answer.sort((a, b) => a - b) : [-1];
};