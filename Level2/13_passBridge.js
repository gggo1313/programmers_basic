// 1초에 1만큼 건널 수 있는 다리
// 다리길이 bridge_length와 다리가 견딜 수 있는 무게 weight
// 건너려는 트럭의 순서와 무게가 적혀 있는 truck_weights
// 모든 트럭이 다리를 건너는 데에 걸리는 시간을 return
function solution (bridge_length, weight, truck_weights) {
    if (truck_weights.length === 0) return 0;

    let count = 0;
    let sum = 0;
    const state = new Array(bridge_length).fill(0);

    let now_truck = truck_weights.shift();

    state.unshift(now_truck);
    state.pop();

    sum += now_truck;
    count++;

    while (sum) {
        sum -= state.pop();
        now_truck = truck_weights.shift();

        if (sum + now_truck > weight) {
            truck_weights.unshift(now_truck);
            state.unshift(0);
        } else if (now_truck) {
            state.unshift(now_truck);
            sum += now_truck;
        } else {
            state.unshift(0);
        };

        count++;
    };

    return count;
};

let tw1 = [7, 4, 5, 6];
let tw2 = [10];
let tw3 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

console.log(solution2(2, 10, tw1));
// console.log(solution(100, 100, tw2));
// console.log(solution(100, 100, tw3));

// 다른 사람 풀이
// 다음 트럭이 못올라오는 상황이면 올라올 상황이 될 때까지 시간을 점프함
function solution2 (bridge_length, weight, truck_weights) {
    // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간]
    let time = 0, qu = [[0, 0]], weightOnBridge = 0;

    // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때까지 다음 루프 반복
    while (qu.length > 0 || truck_weights.length > 0) {
        // 1. 현재 시간이 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
        //    다리 위 트럭 무게 합에서 빼준다.
        if (qu[0][1] === time) {
            weightOnBridge -= qu.shift()[0];
            console.log("1")
        };

        if (weightOnBridge + truck_weights[0] <= weight) {
            // 2. 다리 위 트럭 무게 합 + 대지 중인 트럭의 첫 무게가 감당 무게 이하면
            //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가
            weightOnBridge += truck_weights[0];
            qu.push([truck_weights.shift(), time + bridge_length]);
            console.log("2")
        } else {
            // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
            //    첫 번째 트럭이 빠지도록 그 시간으로 점프한다.
            //    참고: if 밖에서 1 더하기 때문에 -1 해줌
            if (qu[0]) time = qu[0][1] - 1;
            console.log("3")
        };
        // 시간 업데이트 해준다.
        time++;
        console.log("que: ", qu, "time: ", time);
    };

    return time;
};

