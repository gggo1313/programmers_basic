// 주차 요금을 나타내는 정수 배열 fees 
// fees = [기본 시간(분), 기본 요금(원), 단위 시간(분), 단위 요금(원)]
// 입/출차 내역을 나타내는 문자열 배열 records
// records = ["HH:MM CarNumber IN/OUT"]
// 차량 번호가 가장 작은 순서대로 주차요금을 배열을 담아 return
function solution (fees, records) {
    const car = {};
    const carNum = [];
    const answer = [];

    records = records.map((v) => v.split(" "));

    for (let i = 0; i < records.length; i++) {
        if (!car[records[i][1]]) {
            car[records[i][1]] = 0;
            carNum.push(records[i][1]);
        };

        const hour_Minute = records[i][0].split(":");
        const curTime = hour_Minute[0] * 60 + hour_Minute[1] * 1;

        if (records[i][2] === "IN") {
            car[records[i][1]] += (-1) * curTime;
        } else {
            car[records[i][1]] += curTime;
        };
    };

    carNum.sort((a, b) => a - b);

    for (let i = 0; i < carNum.length; i++) {
        if (car[carNum[i]] <= 0) car[carNum[i]] += 1439;

        if (car[carNum[i]] < fees[0]) {
            answer.push(fees[1]);
        } else {
            answer.push(fees[1] + Math.ceil((car[carNum[i]] - fees[0]) / fees[2]) * fees[3]);
        };
    };

    return answer;
};


const fees1 = [180, 5000, 10, 600];
const fees2 = [120, 0, 60, 591];
const fees3 = [1, 461, 1, 10];
const records1 = ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"];
const records2 = ["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"];
const records3 = ["00:00 1234 IN"];

console.log(solution(fees1, records1));
console.log(solution(fees2, records2));
console.log(solution(fees3, records3));