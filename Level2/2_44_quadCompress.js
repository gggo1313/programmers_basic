// 1과 0으로만 채워진 2^n X 2^n의 배열 arr
// 전체 영역부터 시작해서 특정 영역 내의 원소가 전부 같은 값이면 하나로 압축
// 아니라면 영역을 정사각형 4등분하여 다시 압축
// 압축이 끝났을 때 [0의 개수, 1의 개수]를 return
function solution (arr) {
    const countArray = [0, 0];
    const size = arr.length;
    quad(arr, size, countArray, [0, 0]);

    return countArray;
};

function quad (array, size, countArray, start) {
    // quad 압축 시작 지점
    const first = array[start[0]][start[1]];

    // size가 1이라면 해당 영역 압축 종료
    if (size === 1) {
        first === 0 ? countArray[0] += 1 : countArray[1] += 1;
        return;
    };

    // 압축 가능여부 판별
    let isAble = true;

    for (let i = start[0]; i < start[0] + size; i++) {
        // 시작지점의 row index 부터 해당 영역 마지막 index까지
        for (let j = start[1]; j < start[1] + size; j++) {
            // 시작지점의 col index부터 해당 영역 마지막 index까지
            // first 값과 다른 값이 나타나면 압축 불가능으로 판단 후 종료
            if (first !== array[i][j]) {
                isAble = false;
                break;
            };
        };
        // isAble이 false가 되면 종료
        if (!isAble) break;
    };

    // 해당 영역이 압축 가능으로 판단되면 first 값에 따라 
    // countArray 값 증가시키고 quad 종료 
    if (isAble) {
        first === 0 ? countArray[0]++ : countArray[1]++;
        return;
    };

    // quad가 종료되지 않으면 4개로 쪼개진 영역에서 quad 재실행
    const half = size / 2;
    quad(array, half, countArray, start);
    quad(array, half, countArray, [start[0], start[1] + half]);
    quad(array, half, countArray, [start[0] + half, start[1]]);
    quad(array, half, countArray, [start[0] + half, start[1] + half]);
    return;
};

const arr1 = [[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]];
const arr2 = [[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,0,0,0,1,1,1,1],[0,1,0,0,1,1,1,1],[0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,1],[0,0,0,0,1,1,1,1]];

console.log(solution(arr1));
console.log(solution(arr2));

// 다른 사람 풀이
function solution2 (arr) {
    const quadZip = (row, col, n) => {
        // 원소가 하나면 원소값의 개수를 카운트
        if (n < 2) return arr[row][col] ? [0, 1] : [1, 0];
        let cnt0 = 0, cnt1 = 0; n >>= 1;
        for(let [i, j] of [[0, 0], [0, 1], [1, 0], [1, 1]]) {
            // 4등분한 정사각형 각각에서 quadZip 실행
            let [zero, one] = quadZip(row + i * n, col + j * n, n);
            cnt0 += zero;
            cnt1 += one;
        };

        // 전부 같은 값인지 확인할 필요 없이
        // 다른 값이 하나도 없다면 0이나 1 한개씩만 return
        if (cnt0 === 0) return [0, 1];
        if (cnt1 === 0) return [1, 0];
        // 다른 값이 있다면 [cnt0, cnt1] return
        return [cnt0, cnt1];
    };

    return quadZip(0, 0, arr.length);
};