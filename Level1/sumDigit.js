// �ڿ��� N�� �� �ڸ����� ���� ���ؼ� return

function solution (N) {
    let result = 0;

    do {
        result += N % 10;
        N = Math.floor(N / 10);
        // console.log(result);
    } while (N > 0);

    return result;
};

solution(9876);

// �ٸ� ��� Ǯ��

function solution2(n) {
    return (n + "").split("").reduce((acc, cur) => acc + parseInt(cur), 0)
}

console.log(solution2(98765));