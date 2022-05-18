// �� �ڸ����� ������ �������� �� �ִ� �� x�� �ϻ��� ��
// �Է¹��� �ڿ��� x�� �ϻ��� ������ �Ǻ��ϴ� �Լ�
// true, false�� return

function solution (x) {
    const arr = String(x).split(""); // split()�� "" �ؾ� ��Ʈ���� ©��
    let sumOfDigits = 0;
    arr.forEach(item => {
        sumOfDigits += Number(item);
    });
    console.log(sumOfDigits);

    return x % sumOfDigits === 0 ? true : false; 
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));

// �ٸ� ��� Ǯ��
function Harshad (n) {
    return !(n % (n + "").split("").reduce((a, b) => +b + +a));
};

console.log("isHarshad: " + Harshad(148));

function solution2 (x) {
    let num = x;
    let sum = 0;
    do {
        sum += x % 10;
        x = Math.floor(x / 10);
    } while (x > 0) ;

    return !(num % sum);
}

console.log(solution2(130));
