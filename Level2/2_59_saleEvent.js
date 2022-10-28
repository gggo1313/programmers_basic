// ���� ǰ�� ���� �迭 discount
// ���� ��� ǰ�� �迭 want, �� ǰ���� ��� ���� ���� �迭 number
// number �迭 ������ ���� 10
// ���ϴ� ǰ���� �� �� �� �ִ� ��¥�� ���� return

function solution (want, number, discount) {
    let count = 0;

    // want ǰ���� discount�� ���� ��� 0 return
    want.forEach((v) => {
        if (!discount.includes(v)) return 0
    });

    // ���� ��� �� ����
    const buyProduct = new Object();

    for (let i = 0; i < want.length; i++) {
        buyProduct[want[i]] = number[i];
    };

    // ȸ������Ͽ� ���� ���� ǰ�� �� ����
    const time = discount.length - 9;

    for (let i = 0; i < time; i++) {
        let isVerified = true;
        const salesProduct = new Object();

        for (let j = i; j < i + 10; j++) {
            salesProduct[discount[j]] = (salesProduct[discount[j]] || 0) + 1;
        };

        // ����ǰ��� ���� ǰ�� ���� ��
        for (let k = 0; k < want.length; k++) {
            let product = want[k];

            // ���� ǰ�� �� ���� ǰ�� ���� ���ų� 
            // ������ �ٸ� ǰ���� ������ ���� �����ϰ� break
            if (!salesProduct[product] || 
                buyProduct[product] !== salesProduct[product]) {
                    isVerified = false;
                    break;
            };
        };

        // ���� �Ϸ�Ǹ� count++
        if (isVerified) count++;
    };

    return count;
};

const want1 = ["banana", "apple", "rice", "pork", "pot"];
const want2 = ["apple"]
const num1 = [3, 2, 2, 2, 1];
const num2 = [10];
const discount1 = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"];
const discount2 = 	["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"];

console.log(solution(want1, num1, discount1));
console.log(solution(want2, num2, discount2));