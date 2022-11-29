// �� �ɻ���� �ɻ��ϴµ� �ɸ��� �ð��� ���� �迭 times
// n ���� �ɻ������ ��� �ɻ� �޴µ� �ɸ��� �ð��� �ּҰ��� return
function solution (n, times) {
    let left = 1;
    let right = n * Math.max(...times);

    while (left < right) {
        const temp = Math.floor((left + right) / 2);

        const count = times.reduce((acc, cur) => {
            return acc + Math.floor(temp / cur);
        }, 0);

        if (count >= n) {
            right = temp;
        } else {
            left = temp + 1;
        };
    };

    return right;
};