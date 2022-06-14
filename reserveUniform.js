// 전체 학생 수 n
// 체육복을 잃어버린 학생의 번호가 담긴 배열 lost
// 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve
// 잃어버린 학생은 자기 번호의 위아래 1번 차이까지만 체육복을 빌릴 수 있음
// 여벌의 체육복을 잃어버린 학생은 빌려줄 수 없음
// 체육수업을 들을 수 있는 학생의 최대값을 return

function solution (n, lost, reserve) {
    // 실제 빌려줄 수 있는/빌려갈 수 있는 학생의 번호(여벌의 체육복도 있음)
    let realReserve = reserve.filter(e => !lost.includes(e)).sort((a, b) => a - b);
    const realLost = lost.filter(e => !reserve.includes(e)).sort((a, b) => a - b);

    // 빌려가기
    let count = 0;

    realLost.forEach(e => {
        // 빌려갈 체육복이 없으면 수행하지 않음
        if (realReserve.length === 0) {
            return;
        }

        // 가장 번호 낮은 학생부터 체육복 빌려감
        // 자기 번호 -1 부터 빌려갈 체육복을 찾음
        // 빌려가면 빌려갈 수 있는 목록에서 제외
        if (realReserve.includes(e - 1)) {
            realReserve = realReserve.filter(f => f !== e - 1);
            count++;
        }
        else if(realReserve.includes(e + 1)) {
            realReserve = realReserve.filter(f => f !== e + 1);
            count++;
        };
    });

    return n - realLost.length + count;
};

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));

// 다른 사람 풀이
// 가장 짧은 코드
function solution2 (n, lost, reserve) {
    let realReserve = reserve.filter(e => !lost.includes(e)).sort((a, b) => a - b);
    let realLost = lost.filter(e => !reserve.includes(e)).sort((a, b) => a - b);

    return n - realLost.filter(a => {
        // realLost에 있는 element와 값의 차이가 1인 realReserve의 element b
        const b = realReserve.find(r => Math.abs(r - a) <= 1) 
        // realReserve에 값의 차이가 1인 element가 없으면 realLost의 다음 element로 넘어감
        if(!b) return true;
        // b가 존재하면 realReserve에서 제거함
        reserve = reserve.filter(r => r !== b); 
    }).length // 전체 학생 수에서 더 이상 빌려갈 수 없는 학생 수의 차이
};

// 출제자의 의도에 가장 부합할 것 같은 코드
function solution3 (n, lost, reserve) {
    const students = {};
    let answer = 0;

    // 기본으로 모든 학생이 체육복을 가지고 있다고 가정
    for (let i = 1; i <= n; i++) {
        students[i] = 1;
    };

    // 잃어버렸을 경우 -1, 여벌이 있는 경우 +1
    lost.forEach(number => students[Number] -= 1);
    reserve.forEach(number => students[number] += 1);

    // 빌려가기
    for (let i = 1; i <= n; i++) {
        // 여벌이 있는 학생 이전 번호의 학생이 체육복 없는 경우
        if (students[i] === 2 && students[i - 1] === 0) {
            students[i - 1] += 1;
            students[i] -= 1;
        }
        // 여별이 있는 학생 다음 번호의 학생이 체육복 없는 경우
        else if (students[i] === 2 && students[i + 1] === 0) {
            students[i + 1] += 1;
            students[i] -= 1;
        };
    }

    // 체육복 입고 나갈 수 있는 학생 수
    for (let key in students) {
        if (students[key] >= 1) {
            answer++;
        };
    };

    return answer;
}