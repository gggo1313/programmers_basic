// 1�࿡������ ������ ���� ���� ���� �ʰ� ���� �� �ִ� ������ �ִ밪�� return
function solution (land) {
    let answer = [];

    // ù ��° �࿡�� �ڽ��� index�� ������ ������ index�� ���� ��
    // max ���� ã�Ƽ� ������
    // ������ ����� �ݺ�

    for (let i = 1; i < land.length; i++) {
        land[i][0] += Math.max(
            land[i - 1][1],
            land[i - 1][2],
            land[i - 1][3]
        );
        land[i][1] += Math.max(
            land[i - 1][0],
            land[i - 1][2],
            land[i - 1][3]
        );
        land[i][2] += Math.max(
            land[i - 1][1],
            land[i - 1][0],
            land[i - 1][3]
        );
        land[i][3] += Math.max(
            land[i - 1][1],
            land[i - 1][2],
            land[i - 1][0]
        );
    };

    answer = land[land.length - 1];

    return Math.max(...answer);
};

let land1 = [[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]];

console.log(solution(land1));

// �ٸ� ��� Ǯ��
// reduce�� �̿��� Ǯ��
// ������ ��Ÿ�� ����
function solution2 (land) {
    return Math.max(...land.reduce((a, c) => {
        return [
            c[0] + Math.max(a[1], a[2], a[3]),
            c[1] + Math.max(a[0], a[2], a[3]),
            c[2] + Math.max(a[1], a[0], a[3]),
            c[3] + Math.max(a[1], a[2], a[0])
        ];
    }, [0, 0, 0, 0]));
};