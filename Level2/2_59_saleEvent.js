// 할인 품목 순서 배열 discount
// 구매 희망 품목 배열 want, 각 품목의 희망 구매 개수 배열 number
// number 배열 원소의 합은 10
// 원하는 품목을 다 살 수 있는 날짜의 수를 return

function solution (want, number, discount) {
    let count = 0;

    // want 품목이 discount에 없는 경우 0 return
    want.forEach((v) => {
        if (!discount.includes(v)) return 0
    });

    // 구매 목록 및 개수
    const buyProduct = new Object();

    for (let i = 0; i < want.length; i++) {
        buyProduct[want[i]] = number[i];
    };

    // 회원등록일에 따른 구매 품목 및 수량
    const time = discount.length - 9;

    for (let i = 0; i < time; i++) {
        let isVerified = true;
        const salesProduct = new Object();

        for (let j = i; j < i + 10; j++) {
            salesProduct[discount[j]] = (salesProduct[discount[j]] || 0) + 1;
        };

        // 구매품목과 세일 품목 개수 비교
        for (let k = 0; k < want.length; k++) {
            let product = want[k];

            // 구매 품목 중 세일 품목에 없는 경우거나 
            // 개수가 다른 품목이 있으면 검증 실패하고 break
            if (!salesProduct[product] || 
                buyProduct[product] !== salesProduct[product]) {
                    isVerified = false;
                    break;
            };
        };

        // 검증 완료되면 count++
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