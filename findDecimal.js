// 1���� �Է¹��� ���� n ���̿� �ִ� �Ҽ��� ������ return

function solution (n) {
    let answer = n;

    for (i = 4; i <= n; i++) {
        for (j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
            // �ӵ� �� ȿ���� ������ �����佺�׳׽��� ü ���
            // (n������ ������ n <= m^2�� �����ϴ� ���� ���� ���� m�� 
            // ����� �ƴ϶�� �Ҽ��̴�.)
            if (i % j == 0) {
                answer -= 1;
                console.log("i: ", i, "j: ", j);
                break;
            };
        };
    };

    return answer - 1;
};

console.log(solution(10));
console.log(solution(5));
// console.log(solution(987654));

// �ٸ� ��� Ǯ��
// �����佺�׳׽��� ü�� �ڵ�� �״�� ����
function solution2 (n) {
    const s = new Set();
    // 2�� ������ ��� ¦���� 1�� ����
    for(let i = 1; i <= n; i += 2) {
        s.add(i);
    }

    s.delete(1);
    s.add(2);

    console.log(typeof s);

    // n <= j^2
    for (let j = 3; j <= Math.sqrt(n); j += 2) {
        if (s.has(j)) {
            // j�� ����� ��� ����
            for (let k = j * 2; k <= n; k += j) {
                s.delete(k);
            };
        };
    };

    return s.size;
};

console.log(solution2(987654));