// 인쇄 대기열에 인쇄 우선 순위가 표시 priorities
// 인쇄 대기열 제일 앞에 있는 문서보다 더 우선순위 높은 문서가 뒤에 있으면 
// 제일 앞에 있는 문서를 제일 뒤에 넣음
// 내가 요청한 문서(location)가 몇 번째로 인쇄되는지 return
function solution (priorities, location) {
    const answer = [];
    const indexOrder = priorities.map((e, i) => [i, e]);

    const print = (prior, order) => {
        console.log("prior: ", prior, "order: ", order);
        if (Math.max(...prior) !== prior[0]) {
            order.push(order[0]);
            order.shift();
            prior.push(prior[0]);
            prior.shift();
            console.log("After1");
            console.log("prior: ", prior, "order: ", order);
            console.log("")
        } else {
            answer.push(order[0]);
            order.shift();
            prior.shift();
            console.log("After2");
            console.log("prior: ", prior, "order: ", order);
            console.log("")
        };

        console.log(answer);

        if(order.length > 0) print(prior,order);
    };

    print(priorities, indexOrder);

    return answer.findIndex(e => e[0] === location) + 1;
};

let p1 = [2, 1, 3, 2];
let p2 = [1, 1, 9, 1, 1, 1];

console.log(solution(p1, 2));
console.log(solution(p2, 0));

// 다른 사람 풀이
// object로 풀이
// arr.some(e => condition) 각 요소가 condition을 만족하면 true를 return
function solution2(priorities, location) {
    var list = priorities.map((t, i) => ({
        my : i === location, // my의 value를 찾는 것만 true, 아닌거는 false
        val : t,
    }));

    console.log(list);

    var count = 0;
    while(true) {
        // 맨 앞의 프린트물
        var cur = list.shift();
        // 맨 앞의 프린트물이 우선순위 가장 높은지
        if (list.some(e => e.val > cur.val)) { 
            list.push(cur);
        }
        else {
            count++;
            // 지금 프린트하는게 my인지
            if(cur.my) return count; // 
        }
    }
}

console.log(solution2(p1, 2));
console.log(solution2(p2, 0));