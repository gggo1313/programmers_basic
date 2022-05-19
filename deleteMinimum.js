// ������ ������ �迭 arr ���� ���� ���� ���� ������ �迭�� return
// return �Ϸ��� �迭�� �� �迭�� ��쿣 �迭�� -1�� ä�� return
function solution (arr) {
    // �ּҰ� ã��
    let temp = Object.assign([], arr);
    temp.sort((a, b) => a - b);
    // �ּҰ�: temp[0]

    // �ּҰ� ����
    arr.splice(arr.indexOf(temp[0]), 1);

    return arr.length == 0 ? [-1] : arr; 

};

const arr1 = [4, 3, 2, 1];
const arr2 = [10, 2, 5];

console.log("arr1: ", solution(arr1), "arr2: ", solution(arr2));

// �ٸ� ��� �亯
// �迭���� �ּҰ��� �� ���� ã�� �� �ִ�
function solution2 (arr) {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    if(arr.length < 1) return [-1];
    return arr;
};

console.log("arr1: ", solution2(arr1), "arr2: ", solution2(arr2));

// reduce�� filter �̿�
function solution3 (arr) {
    var min = arr.reduce((p, c) => Math.min(p, c));
    let r = arr.filter(v => v != min);
    r = r.length == 0 ? [-1] : r;
    // console.log(r);
    return r;
};

console.log("arr1: ", solution3(arr1), "arr2: ", solution3(arr2));