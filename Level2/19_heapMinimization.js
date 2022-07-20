// 남은 일의 작업량이 담긴 배열 works
// 작업할 수 있는 시간 N 만큼 works에서 작업량을 감소시킬 수 있음
// 배상 비용은 각 작업량의 제곱의 합
// 배상 비용의 최소값을 return
function solution (N, works) {
    const leng = works.length;
    // 예외. N이 works의 합보다 작지 않으면 0을 return
    if (N >= works.reduce((prev, cur) => {
        return prev + cur
    }, 0)) return 0;

    for (let i = 1; i <= N; i++) {
        // 1. works 중에서 제일 큰 수를 찾는다
        works.sort((a, b) => a - b);
        console.log(works);

        // 2. 제일 큰 수를 1 깎는다
        works[leng - 1]--;
    };
    // 3. N회 반복한다

    const answer = works.reduce((prev, cur) => {
        return prev + cur ** 2;
    }, 0);
    
    return answer;
};

let works1 = [4, 3, 3];
let works2 = [3, 3, 3];

console.log(solution(4, works1));
console.log(solution(2, works2));