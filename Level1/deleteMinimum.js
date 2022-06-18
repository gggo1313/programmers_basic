// 정수를 저장한 배열 arr 에서 가장 작은 수를 제거한 배열을 return
// return 하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 return
function solution (arr) {
    // 최소값 찾기
    let temp = Object.assign([], arr);
    temp.sort((a, b) => a - b);
    // 최소값: temp[0]

    // 최소값 삭제
    arr.splice(arr.indexOf(temp[0]), 1);

    return arr.length == 0 ? [-1] : arr; 

};

const arr1 = [4, 3, 2, 1];
const arr2 = [10, 2, 5];

console.log("arr1: ", solution(arr1), "arr2: ", solution(arr2));

// 다른 사람 답변
// 배열에서 최소값을 더 쉽게 찾을 수 있다
function solution2 (arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    if(arr.length < 1) return [-1];
    return arr;
};

console.log("arr1: ", solution2(arr1), "arr2: ", solution2(arr2));

// reduce와 filter 이용
function solution3 (arr) {
    var min = arr.reduce((p, c) => Math.min(p, c));
    let r = arr.filter(v => v != min);
    r = r.length == 0 ? [-1] : r;
    // console.log(r);
    return r;
};

console.log("arr1: ", solution3(arr1), "arr2: ", solution3(arr2));