// 2���� ��� arr1�� arr2�� �Է� �޾�
// ��� ������ ����� return
// n * n ���

// function solution (arr1, arr2) {
//     const answer = [[]];
//     for(let i = 0; i < arr1.length; i++) {
//         answer[i] = [];
//         for(let j = 0; j < arr1[0].length; j++) {
//             answer[i][j] = arr1[i][j] + arr2[i][j];
//             console.log("middle: " + answer);
//         }
//     }
//     console.log(answer);
//    return answer;
// }

// ���� �����Ͱ� Ŭ �� ���� �ڵ�δ� �׽�Ʈ ����

function solution2 (arr1, arr2) {
    const answer = [];
    arr1.forEach((r_item, r_index) => {
        answer.push(r_item.map((c_item, c_index) => c_item + arr2[r_index][c_index]));
        console.log("answer: " + answer);
    });
    console.log("final: " + answer);
    return answer;
}

const arr11 = [[1, 2], [2, 3]];
const arr12 = [[3, 4], [5, 6]];
const arr21 = [[1], [2]];
const arr22 = [[3], [4]];

solution2(arr11, arr12);
solution2(arr21, arr22);

// �ٸ� ��� Ǯ��
function sumMatrix(A, B) {
    return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}
// foreach�� push�� �Ἥ�ϴ� �κ��� map 2������ ��ĥ �� ����

