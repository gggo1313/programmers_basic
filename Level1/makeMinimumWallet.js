// [����, ����] ���̰� �־����� ������ ���� �� ���� ��
// ��� ������ ���� �� �ִ� ���� ���� �������� ������ ũ�⸦ return

function solution (sizes) {
    const width = [];
    const height = [];

    for (let i = 0; i < sizes.length; i++) {
        sizes[i].sort((a, b) => a - b);
        width.push(sizes[i][0]);
        height.push(sizes[i][1]);
    };

    // �迭�� ���� ���ϱ� ���ؼ��� ... ����� ��
    return Math.max(...width) * Math.max(...height);
};

const size1 = [[60, 50], [30, 70], [60, 30], [80, 40]];
const size2 = [[10, 7], [12, 3], [8, 15], [5, 15], [14, 7]];
const size3 = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]];

console.log(solution(size1));
console.log(solution(size2));
console.log(solution(size3));

// �ٸ� ��� Ǯ��
// ������ ����

function solution2 (sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    // const newSizes = sizes.map(e => e.sort((a, b) => a- b));

    let maxSize = [0, 0];
    rotated.forEach(([w, h]) => {
        // ���� ���� ���Ͽ� ũ�� Max �� ��ü
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    });

    return maxSize[0] * maxSize[1];
}