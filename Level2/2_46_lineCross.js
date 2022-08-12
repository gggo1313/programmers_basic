// Ax + By + C = 0���� ǥ���� �� �ִ� �������� ���� ������ *�� ǥ��
// �� ���� ���������� .ǥ��
// [A, B, C]�� ������ ����ִ� �迭 line�� �־���
// ��� ���� ǥ���� �� �ִ� �ּ����� �迭�� return
function solution (line) {
    const arrX = [];
    const arrY = [];
 
    const intersection = (line1, line2) => {
        const [a, b, e] = line1;
        const [c, d, f] = line2;

        const mod = a * d - b * c;
        if (!mod) return;

        const xNumerator = b * f - e * d;
        const yNumerator = e * c - a * f;

        // ���� �������� 0�̱� ������ return ���� ����
        if (xNumerator % mod || yNumerator % mod) return;

        arrX.push(xNumerator / mod);
        arrY.push(yNumerator / mod);
    };

    line.map((v, i) => {
        for (let j = i + 1; j < line.length; j++) {
            intersection(v, line[j]);
        };
    });

    const xMax = Math.max(...arrX);
    const xMin = Math.min(...arrX);
    const yMax = Math.max(...arrY);
    const yMin = Math.min(...arrY);

    const colLength = xMax - xMin + 1;
    const rowLength = yMax - yMin + 1;

    const answer = [...Array(rowLength)].map(() => [...Array(colLength)].map(() => "."));
    
    for (let i = 0; i < arrX.length; i++) {
        const [xIdx, yIdx] = [arrX[i] - xMin, yMax - arrY[i]];

        answer[yIdx][xIdx] = "*";
    };

    return answer.map(v => v.join(""));
};

const line1 = [[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]];

console.log(solution(line1));