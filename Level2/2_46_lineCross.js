// Ax + By + C = 0으로 표현할 수 있는 직선들의 정수 교점에 *을 표시
// 그 외의 격자점에는 .표시
// [A, B, C]의 값들이 들어있는 배열 line이 주어짐
// 모든 별을 표시할 수 있는 최소한의 배열을 return
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

        // 나눠 떨어지면 0이기 때문에 return 하지 않음
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