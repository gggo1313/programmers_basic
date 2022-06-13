// 배열 arr에서 연속으로 같은 숫자가 나타나면 1개 빼고 전부 제거하여 return

function solution (arr) {

    return arr.filter((v, i) => {
        return v !== arr[i + 1];
    });
};

const arr1 = [1, 1, 3, 3, 0, 1, 1];
const arr2 = [4, 4, 4, 3, 3];
console.log(solution(arr1));