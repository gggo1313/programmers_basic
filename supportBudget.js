// 각 부서에 필요한 물품을 지원해야 함
// 예산이 부족해서 모든 부서에 물품을 구매해줄 수 없음
// 물품을 구매할 때는 더 적은 금액으로 구매할 수 없음
// 부서별로 신청한 금액이 있는 배열 d와 예산 budget이 주어질 때
// 최대 몇 개의 부서에 물품을 지원할 수 있는지 return

function solution (d, budget) {
    const sorted = d.sort((a, b) => a - b);
    let sum = 0;
    let answer = 0;

    for (let i = 0; i < sorted.length; i++) {
        sum += sorted[i];

        if(sum > budget) {
            break;
        };
        
        answer += 1;
    };

    return answer;
};

const d1 = [1, 3, 2, 5, 4];
const d2 = [2, 2, 3, 3];

console.log(solution(d1, 9));
console.log(solution(d2, 10));

// 다른 사람 풀이
// 예산초과로 멈추지 않고 예산 내일 경우 answer++ 로 더 간결하게
function solution2(d, budget) {
    let answer = 0;
    let money = 0;
    d.sort((a, b) => a - b).forEach(function(val) {
        money += val;
        if (money <= budget){
            answer++;
        };
    });

    return answer;
}