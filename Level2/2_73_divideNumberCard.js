// 두 숫자 배열 arrayA, arrayB
// 한 쪽의 숫자배열만 전부 나눌 수 있는 양의 정수 A
// 다른 한 쪽의 숫자배열은 전부 나눌 수 없는 양의 정수 A
// 존재하지 않다면 0을 return

const solution = (arrayA, arrayB) => {
    const getGCD = (num1, num2) => {
        return (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
    };

    let [minA, minB] = [[getGCD(arrayA[0], arrayA[1])], [getGCD(arrayB[0], arrayB[1])]];

    const getArrayGCD = (a, arr) => {
        for (let i = 2; i < arr.length; i++) {
            let gcd = getGCD(a[0], arr[i]);

            if (gcd === 1) return 1;
            if (a[0] > gcd) a[0] = gcd;
        };

        return a[0];
    };

    let [gcdA, gcdB] = [getArrayGCD(minA, arrayA), getArrayGCD(minB, arrayB)];
    // console.log(gcdA, gcdB);

    const getDivisors = (gcd) => {
        if (gcd === 1) return [];

        const divisors = [];

        for (let i = 2; i < Math.sqrt(gcd); i++) {
            if (gcd % i === 0) {
                divisors.unshift(i);
                if (i === Math.sqrt(gcd)) continue;
                divisors.unshift(gcd / i);
            };
        };

        divisors.unshift(gcd);


        return divisors.sort((a, b) => b - a);
    };

    const [divA, divB] = [getDivisors(gcdA), getDivisors(gcdB)];
    // console.log(divA, divB);

    let [aOfA, aOfB] = [0, 0];

    for (let i = 0; i < divA.length; i++) {
        let complete = true;

        for (let j = 0; j < arrayB.length; j++) {
            if (arrayB[j] % divA[i] === 0) {
                console.log("a: ", divA[i]);
                complete = false;
                break;
            };
        };

        if (complete) {
            aOfA = divA[i];
            break;
        };
    };

    for (let i = 0; i < divB.length; i++) {
        let complete = true;

        for (let j = 0; j < arrayA.length; j++) {
            if (arrayA[j] % divB[i] === 0) {
                console.log("b: ", divB[i]);
                complete = false;
                break;
            };
        };

        if (complete) {
            aOfB = divB[i];
            break;
        };
    };

    return Math.max(aOfA, aOfB);
};

const arrA1 = [10, 17];
const arrA2 = [10, 20];
const arrA3 = [14, 35, 119];
const arrB1 = [5, 20];
const arrB2 = [5, 17];
const arrB3 = [18, 30, 102];

console.log(solution(arrA1, arrB1));
console.log(solution(arrA2, arrB2));
console.log(solution(arrA3, arrB3));

// 다른 사람 풀이
// every, some을 이용하여 간단하게 조건 설정
function solution2 (arrayA, arrayB) {
    const aResult = getAnswer(arrayA, arrayB);
    const bResult = getAnswer(arrayB, arrayA);

    return aResult > bResult ? aResult : bResult;
};

function getAnswer (A, B) {
    A.sort((a, b) => a - b);
    // 최소값부터 1씩 줄여가면서
    for (let i = A[0]; i > 1; i--) {
        if (A.every(a => a % i === 0) && !B.some(b => b % i === 0)) i;
    };

    return 0;
};
