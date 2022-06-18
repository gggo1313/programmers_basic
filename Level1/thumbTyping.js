// 스마트폰의 1, 2, 3, 4, 5, 6, 7, 8, 9, *, 0, # 패드를 누르는 배열 numbers
// 주손 hand
// 1, 4, 7, *은 왼손
// 3, 6, 9, #는 오른손 
// 2, 5, 8, 0은 더 가까운 손, 이 때 거리가 같다면 주손
// 각 번호를 누른 주손을 연속된 문자열 형태로 return
function solution (numbers, hand) {
    // 각 손의 높이를 치환 1, 4, 7, * => 1, 2, 3
    // 각 손의 수평방향을 치환 1, 2, 3 => 1, 0, 1
    // 초기값 설정 [높이, 수평]
    let right = [4, 1];
    let left = [4, 1];
    let answer = "";

    for (let i = 0; i < numbers.length; i++) {
        // 왼손자리 누를 때
        if(numbers[i] % 3 === 1) {
            left = [(numbers[i] + 2) / 3, 1];
            answer += "L";
        };

        // 오른손자리 누를 때
        if(numbers[i] % 3 === 0 && numbers[i] > 0) {
            right = [numbers[i] / 3, 1];
            answer += "R";
        };
        
        // 가운데자리 누를 때
        if(numbers[i] % 3 === 2 || numbers[i] === 0) {
            let height = (numbers[i] + 1) / 3;

            // 0일 때
            if (numbers[i] === 0) height = 4;

            // 손가락이 상하좌우로만 이동할 수 있으므로 맨하탄 거리 사용
            // let l_distance = Math.pow((left[0] - height), 2) + Math.pow(left[1], 2);
            // let r_distance = Math.pow((right[0] - height), 2) + Math.pow(right[1], 2);
            let l_distance = Math.abs(left[0] - height) + left[1];
            let r_distance = Math.abs(right[0] - height) + right[1];

            if (l_distance > r_distance) {
                right = [height, 0];
                answer += "R";
            };
            if (l_distance < r_distance) {
                left = [height, 0];
                answer += "L";
            };
            if (l_distance === r_distance) {
                if(hand === "right") {
                    right = [height, 0];
                    answer += "R";
                } else {
                    left = [height, 0];
                    answer += "L";
                };
            };
        };
    };
    
    return answer;
};

let numbers1 = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let numbers2 = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// console.log(solution(numbers1, "right"));
console.log(solution(numbers2, "left"));
console.log(solution(numbers3, "right"));

// 다른 사람 풀이
function Sol2(numbers, hand) {
    hand = hand[0] === "r" ? "R" : "L";

    let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]; // 0123456789 높이
    let h = { L: [1, 1], R: [1, 1]};

    return numbers.map(x => {
        // x가 1, 4, 7 중에 있으면
        if (/[147]/.test(x)) {
            h.L = [position[x], 1];
            return "L";
        };
        // x가 3, 6, 9 중에 있으면
        if (/[369]/.test(x)) {
            h.R = [position[x], 1];
            return "R"
        };

        // 나머지의 경우 x는 2, 5, 8, 0이므로 따로 if를 하지 않음
        // 거리 구하기
        let distL = Math.abs(position[x] - h.L[0]) + h.L[1];
        let distR = Math.abs(position[x] - h.R[0]) + h.R[1]; 

        if (distL === distR) {
            h[hand] = [position[x], 0];
            return hand;
        };
        if (distL < distR) {
            h.L = [position[x], 0];
            return "L";
        };
        // 위 경우를 모두 만족하지 않으면 
        h.R = [position[x], 0];
        return "R";
    }).join("")
};