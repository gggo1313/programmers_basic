// 1 * 1 ���� ���簢������ �̷���� ���� W, ���� H�� �簢��
// �밢������ �߶��� �� ������ ���簢���� ������ return



function solution (W, H) {
    let gcd = getGCD(W, H);
    let penta = (W + H) / gcd - 1;

    return W * H - penta * gcd;
};

function getGCD (a, b) {
    while (b > 0) {
        let r = a % b;
        a = b;
        b = r;
    };

    return a;
};

console.log(solution(8, 12));