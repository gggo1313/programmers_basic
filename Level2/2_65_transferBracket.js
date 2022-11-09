// �������� ���ڿ�: "("�� ")"�� ������ ���� ���ڿ�
// �ùٸ� ���ڿ�: ���� ���� ���ڿ� �� ù��° ���ڿ� �� ���ڷ� ��ȣ�� ���� �� �ִ� ���ڿ�
// �־��� ���ڿ� p�� "("�� ")"�θ� �̷���� ���� 1000���� ¦���� �������� ���ڿ�
// 1. p�� �� ���ڿ��̸� �� ���ڿ� return
// 2. ���ڿ� p�� �� �������� ���ڿ� u, v �� �����µ� u�� �ּҰ�
// 3. u�� �ùٸ� ���ڿ��� �ƴ϶�� u�� �� ��, �� ���ڸ� �����ϰ� 
// ������ ���� ��ȣ ������ �ٲ� ��, �� �ڿ� ( �� )�� �ٿ���
// �ݺ��Ͽ� ���ڿ� p�� �ùٸ� ���ڿ��� ��ȯ�Ͽ� return

function solution (p) {
    if (!p.length) return p;
    let isCorrect = true;
    let count = 0;

        for (let i = 0; i < p.length; i++) {
            if (count < 0) isCorrect = false;
            if (p[i] === "(") count++;
            else if (p[i] === ")") {
                count--;
            };

            if (count === 0) {
                const [u, v] = [p.slice(0, i + 1), p.slice(i + 1)];
                
                if (isCorrect) {
                    return u + solution(v)
                } else {
                    let emptyString = "(" + solution(v) + ")"
                    const reverseBracket = u
                        .slice(1, u.length - 1)
                        .split('')
                        .map((bracket) => bracket === "(" ? ")" : "(")
                        .join("");

                    return emptyString + reverseBracket;
                };
            };
        };
};

const p1 = "(()())()";
const p2 = ")(";
const p3 = "()))((()";
const p4 = "))))((((";

// console.log(solution(p1));
// console.log(solution(p2));
console.log(solution(p4));

// �ٸ� ��� Ǯ��
// while do ������� �� �� Ǯ��
function reverse(str) {
    return str.slice(1, str.length - 1).split("").map((v) => v === "(" ? ")" : "(").join("");
};

function solution2(p) {
    if (p.length < 1) return "";

    let balance = 0;
    let pivot = 0;
    do {balance += p[pivot++] === "(" ? 1 : -1} while (balance !== 0);

    const [u, v] = [p.slice(0, pivot), solution(p.slice(pivot, p.length))];

    if (u[0] === "(") return u + v;
    else return "(" + v + ")" + reverse(u);
};