// ���� ���� n�� k ������ �ٲ��� ��, ��ȯ�� �� �ȿ� �Ʒ� ���ǿ� �´� �Ҽ� ������ return
// 0�� �������� �� Ȥ�� �쿡 �ִ� ��(0�� ������ �� ����)
function solution(n, k) {
    const list = n.toString(k).split("0");
    const prime = list.filter((v) => isPrime(+v));

    return prime.length;
};

function isPrime(num) {
    if(num === 1) {
        return false;
    } else if(num === 2) {
        return true;
    } else if(num % 2 === 0) {
        return false;
    } else {
        for (let i = 3; i <= num ** 0.5; i += 2) {
            if(num % i === 0) {
                return false;
            };
        };

        return true;
    };
};

console.log(solution(437674, 3));
console.log(solution(110011, 10));