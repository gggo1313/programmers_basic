// 스테이지의 개수 N(1 ~ 500)
// 사용자가 아직 클리어하지 못한 스테이지의 배열(1 ~ 200,000)
// stages의 값 중에서 N+1은 전부 클리어한 사용자의 데이터
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return
// 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 나타남
// 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0

function solution (N, stages) {
    // 각 스테이지 별로 클리어하지 못한 유저 수
    const numOfFailUser = [];

    for (let i = 0; i < N; i++) {
        let filtered = stages.filter(e => e === i + 1);

        numOfFailUser.push(filtered.length);        
    };

    console.log("Number of Failed user: ", numOfFailUser);

    // 각 스테이지 별 실패율
    let temp = stages.length;

    const failureRate = numOfFailUser.map((v, i) => {
        if(i > 0) temp = temp - numOfFailUser[i - 1];

        // 스테이지에 도달한 유저가 없으면 실패율은 0
        let rate = v / temp;
        if(temp === 0) rate = 0;

        return [i + 1, rate]; 
    });

    console.log("Failure rate of stages: ", failureRate);

    // 스테이지 실패율 순서
    const rankOfFailureRate = failureRate.sort((a, b) => {
        // 실패율이 같은 경우 작은 번호의 스테이지가 앞에
        if (b[1] === a[1]) a[0] - b[0];
        return b[1] - a[1];
    }).map(e => e[0]);

    console.log("Rank of failure rate: ", rankOfFailureRate);

    return rankOfFailureRate;
};

let stages1 = [2, 1, 2, 6, 2, 4, 3, 3];
let stages2 = [4, 4, 4, 4, 4];

console.log(solution(5, stages1));
console.log(solution(4, stages2));

// 다른 사람 풀이
function solution2 (N, stages) {
    let result = [];

    for (let i = 1; i <= N; i++) {
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;

        result.push([i, curr / reach]);
    };

    result.sort((a, b) => b[1] - a[1]);
    
    console.log("Sol2");
    return result.map((x) => x[0]);
};

console.log(solution2(5, stages1));
console.log(solution2(5, stages2));
// Fatal JavaScript invalid size error 169220804
// FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory