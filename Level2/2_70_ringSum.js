// 원형 수열의 원소가 순서대로 elements로 주어짐
// 연속 부분 수열 원소의 합으로 만들 수 있는 수의 개수를 return

const solution = (elements) => {
    const sumResult = [];

    for (let i = 1; i <= elements.length; i++) {
        let arr = [...elements];

        for (let k = 0; k < i - 1; k++) {
            arr.push(elements[k]);
        };

        for (let j = 0; j < elements.length; j++) {
            let sum = 0;

            for (let k = j; k < j + i; k++) {
                console.log(k);
                sum += arr[k];
            };
            console.log("i: ", i, "sum: ", sum);

            sumResult.push(sum);
        };
    };

    const answer = new Set(sumResult);

    return answer.size;
};

const elements1 = [7, 9, 1, 1, 4];

console.log(solution(elements1));

// 다른 사람 풀이
// 일반적인 set 사용법
// 계산과정 1단계 더 줄이기
function solution2 (elements) {
    const circular = elements.concat(elements); // 원순열 두 개 붙이면 모든 연속 부분 순열을 나타낼 수 있음
    const set = new Set(); // 선언해주고 사용하자

    for (let i = 0; i < elements.length; i++) { // 연속 부분 순열 시작점
        let sum = 0;

        for (let j = 0; j < elements.length; j++) {
            // 연속 부분 순열 시작점에서 가질 수 있는 모든 크기의 부분 순열의 합
            sum += circular[i + j]; 
            set.add(sum);
        };
    };

    return set.size;
};