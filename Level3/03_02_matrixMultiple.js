// ���� ����� ũ�Ⱑ ��� �迭 matrix_sizes
// [a, b], [b, c]�� �� ����� ���ϸ� a X b X c���� ������ ����
// �ּ� ���� ���� return

function solution (matrix_sizes) {
    let answer = 0;
    
    while (matrix_sizes.length > 2) {
        const arr = matrix_sizes.map((v) => v[1]).sort((a, b) => b - a);
        let idx =  matrix_sizes.findIndex(v => v[1] === arr[0]);

        if (!matrix_sizes[idx + 1]) idx = arr.findIndex(v => v === arr[1]);

        const count = matrix_sizes[idx][0] * matrix_sizes[idx][1] * matrix_sizes[idx + 1][1];
        answer += count;

        matrix_sizes[idx][1] = matrix_sizes[idx + 1][1];
        matrix_sizes.splice(idx, 1); 
    };

    answer += matrix_sizes[0][0] * matrix_sizes[0][1] * matrix_sizes[1][1]

    return answer;
};

let arr1 = [[1, 2], [3, 4]];
let arr2 = arr1.map((v) => v[1]);
arr1.splice(1, 1);
console.log(...arr2)
console.log(arr1)
console.log(solution([[5, 3], [3, 10], [10, 6]]));