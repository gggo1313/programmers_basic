const solution = (fees, records) => {
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    const answer = [];

    const sortedRecords = records.map((v) => v.split(" ")).sort((a, b) => a[1] * 1 - b[1] * 1);
    sortedRecords.forEach((record) => record[0].split(":"));
    console.log(sortedRecords);

    const parkingFee = new Map();

    sortedRecords.forEach((record) => {
        const [time, key, inOut] = record;

        if (parkingFee.has(key)) {
            const car = parkingFee.get(key);
            const [hour, minute] = time.split(":");
            const recordTime = hour * 60 + minute * 1;

            if (car.state === "IN") {
                const usingTime = recordTime - car.time;

                car.acc += usingTime;
                car.state = inOut;
                parkingFee.set(key, car);
            } else {
                car.time = recordTime;
                car.state = inOut;
                parkingFee.set(key, car);
            };
        } else {
            const [hour, minute] = record[0].split(":");
            parkingFee.set(record[1], { time : hour * 60 + minute * 1, state : record[2] , acc : 0});
        };
    });
    console.log("calculated: ", parkingFee);

    for (let car of parkingFee.values()) {
        if (car.state === "IN") {
            car.acc += 1439 - car.time;
        };

        if (car.acc > baseTime) {
            answer.push(
                baseFee
                + Math.ceil((car.acc - baseTime) / unitTime) * unitFee
            );
        } else answer.push(baseFee);
    };

    return answer;
};

const fees1 = [180, 5000, 10, 600];
const fees2 = [120, 0, 60, 591];
const fees3 = [1, 461, 1, 10];

const records1 = ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"];
const records2 = ["16:00 3961 IN","16:00 0202 IN","18:00 3961 OUT","18:00 0202 OUT","23:58 3961 IN"];
const records3 = ["00:00 1234 IN"];

console.log(solution(fees3, records3));

// 다른 사람 풀이
// 같은 알고리즘이지만 훨씬 단계를 줄인 코드
function solution2 (fees, record) {
    const parkingTime = {};
    records.forEach((v) => {
        let [time, id, type] = r.split(" ");
        let [h, m] = time.split(":");
        time = h * 60 + m * 1;

        if (!parkingTime[id]) parkingTime[id] = 0;
        if (type === 'IN') parkingTime[id] += (1439 - time);
        if (type === 'OUT') parkingTime[id] -= (1439 - time);
    });

    const answer = [];

    for (let [car, time] of Object.entries(parkingTime)) {
        if (time <= fees[0]) time = fees[1];
        else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1];
        answer.push([car, time]);
    };

    return answer.sort((a, b) => a[0] - b[0]).map(v => v[1]);
};