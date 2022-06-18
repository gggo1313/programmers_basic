// �� ��(n, m)�� �Է¹޾� �ִ������� �ּҰ������ return
// return ����: [gcd, lcm]

// gcd�� ���� ���ϸ� ��
// ���μ��� ���, gcd�� �ſ� ū ���
// ���μ�����

function solution (n, m) {
    let gcd = 1;
    let a = n;
    let b = m;
    const answer = [];
    for (let i = 2; i <= Math.min(n, m); i++) {
        while (n % i == 0 && m % i == 0) {
            n = n / i;
            m = m / i;
            gcd *= i;
            // console.log("n: ", n, "m: ", m, "gcd: ", gcd);
        }
    }
    const lcm = gcd * n * m;
    answer.push(gcd, lcm);
    // console.log(answer);

    return answer;
};

solution(3, 12);
solution(24, 36);

// �ٸ� ��� �亯

// ��Ŭ���� ȣ���� Ȱ��
// gcd(a, b) = gcd(b, a % b)

function gcdlcm(a, b) {
    let r;
    for ( var ab = a * b; r = a % b; a = b, b = r) {} 
    // b = 0 �� �Ǹ� 0���� ���� ���� �����Ƿ� break
    console.log(b, ab / b);
    return [b, ab / b];
}

gcdlcm(78696, 19332);

// ����Լ� + ��Ŭ���� ȣ���� Ȱ��
function gcd(a, b) {
    return b ? gcd(b, a % b) : Math.abs(a)
};
function lcm(a, b) {
    return (a * b) / gcd(a, b)
};
function gcdlcm2(a, b) {
    const answer = [gcd(a, b), lcm(a, b)];
    return answer;
};

gcdlcm2(78696, 19332);