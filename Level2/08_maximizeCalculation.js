// ���ڿ� �����ȣ +, -, * �θ� �̷���� ���ڿ� expression�� �־���
// ���� ��ȣ�� �켱������ �޸��ؼ� ���� ū ũ���� ���ڸ� return
// ���밪�� �ִ뿩�� ��
function solution (expression) {
    let answer = 0;
    const numArr = expression.split(/[^0-9]/).map(e => Number(e));
    const operArr = expression.match(/[\+\-\*]/g);

    const operator = {
        '+': (a, b) => a + b,
        '-' : (a, b) => a - b,
        '*' : (a, b) => a * b,
    };

    const permutation = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
        ['*', '-', '+'],
        ['*', '+', '-']
    ];

    for (const permu of permutation) {
        let copyNum = [...numArr];
        let copyOp = [...operArr];
        let opIdx = 0;

        while (true) {
            for (let i = 0; i < copyOp.length; i++) {
                if (copyOp[i] === permu[opIdx]) {
                    copyNum[i] = operator[copyOp[i]](copyNum[i], copyNum[i + 1]);
                    copyNum.splice(i + 1, 1);
                    copyOp.splice(i, 1);
                    i--;
                };
            };
            opIdx++;

            if (copyNum.length == 1) break;
        }

        if (Math.abs(copyNum[0]) > answer) answer = Math.abs(copyNum[0]);
    }

    return answer;
};

let exp1 = "100-200*300-500+20";
let exp2 = "50*6-3*2";

console.log(solution(exp1));
console.log(solution(exp2));