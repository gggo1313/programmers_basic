// �غ��� ���̿� ���̰� n�� �ﰢ��
// �� �� ���������� �ݽð�������� ������ ä��⸦ ����
// �� �� ����� ������ ����� ��� ������� ��ģ ���ο� �迭�� return
function solution (n) {
    const answer = [];
    let count = 0;
    const arr = Array.from({length: n}, (v, index) => Array(index + 1).fill(0));
    let x = -1;
    let y = 0;

    while (n > 0) {
        for (let i = 0; i < n; i++) {
            x++;
            count++;
            arr[x][y] = count;
        };

        for (let i = 0; i < n - 1; i++) {
            y++;
            count++;
            arr[x][y] = count;
        };

        for (let i = 0; i < n - 2; i++) {
            x--;
            y--;
            count++;
            arr[x][y] = count;
        };

        n -= 3;
    };

    for (array of arr) {
        answer.push(...array);
    };

    return answer;
};

console.log(solution(4));
console.log(solution(5));
console.log(solution(6));

// �ٸ� ��� Ǯ��
// flat�� �̿��Ͽ� �迭 �� ���ҹ迭�� ���� ����
function solution2 (n) {
    let a = Array(n).fill().map((_, i) => Array(i + 1).fill());
    let row = -1;
    let col = 0;
    let fill = 0;

    for (let i = n; i > 0; i -= 3) {
        a[++row][col] = ++fill;
        for (let j = 0; j < i - 1; j++) a[++row][col] = ++fill;
        for (let j = 0; j < i - 1; j++) a[row][++col] = ++fill;
        for (let j = 0; j < i - 2; j++) a[--row][--col] = ++fill;
    };

    return a.flat();
};