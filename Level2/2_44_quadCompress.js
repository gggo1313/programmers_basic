// 1�� 0���θ� ä���� 2^n X 2^n�� �迭 arr
// ��ü �������� �����ؼ� Ư�� ���� ���� ���Ұ� ���� ���� ���̸� �ϳ��� ����
// �ƴ϶�� ������ ���簢�� 4����Ͽ� �ٽ� ����
// ������ ������ �� [0�� ����, 1�� ����]�� return
function solution (arr) {
    const countArray = [0, 0];
    const size = arr.length;
    quad(arr, size, countArray, [0, 0]);

    return countArray;
};

function quad (array, size, countArray, start) {
    // quad ���� ���� ����
    const first = array[start[0]][start[1]];

    // size�� 1�̶�� �ش� ���� ���� ����
    if (size === 1) {
        first === 0 ? countArray[0] += 1 : countArray[1] += 1;
        return;
    };

    // ���� ���ɿ��� �Ǻ�
    let isAble = true;

    for (let i = start[0]; i < start[0] + size; i++) {
        // ���������� row index ���� �ش� ���� ������ index����
        for (let j = start[1]; j < start[1] + size; j++) {
            // ���������� col index���� �ش� ���� ������ index����
            // first ���� �ٸ� ���� ��Ÿ���� ���� �Ұ������� �Ǵ� �� ����
            if (first !== array[i][j]) {
                isAble = false;
                break;
            };
        };
        // isAble�� false�� �Ǹ� ����
        if (!isAble) break;
    };

    // �ش� ������ ���� �������� �ǴܵǸ� first ���� ���� 
    // countArray �� ������Ű�� quad ���� 
    if (isAble) {
        first === 0 ? countArray[0]++ : countArray[1]++;
        return;
    };

    // quad�� ������� ������ 4���� �ɰ��� �������� quad �����
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

// �ٸ� ��� Ǯ��
function solution2 (arr) {
    const quadZip = (row, col, n) => {
        // ���Ұ� �ϳ��� ���Ұ��� ������ ī��Ʈ
        if (n < 2) return arr[row][col] ? [0, 1] : [1, 0];
        let cnt0 = 0, cnt1 = 0; n >>= 1;
        for(let [i, j] of [[0, 0], [0, 1], [1, 0], [1, 1]]) {
            // 4����� ���簢�� �������� quadZip ����
            let [zero, one] = quadZip(row + i * n, col + j * n, n);
            cnt0 += zero;
            cnt1 += one;
        };

        // ���� ���� ������ Ȯ���� �ʿ� ����
        // �ٸ� ���� �ϳ��� ���ٸ� 0�̳� 1 �Ѱ����� return
        if (cnt0 === 0) return [0, 1];
        if (cnt1 === 0) return [1, 0];
        // �ٸ� ���� �ִٸ� [cnt0, cnt1] return
        return [cnt0, cnt1];
    };

    return quadZip(0, 0, arr.length);
};