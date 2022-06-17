// 신고자와 신고대상이 같은 문자열로 입력된 신고의 배열 report
// 신고자 및 신고대상이 모두 포함된 배열 id_list
// 동일한 "신고자 신고대상"일 경우 신고 1회로 처리
// k회 이상 신고당하면 이용정지
// 이용정지가 발생하면 해당 신고대상의 모든 신고자에게 처리 결과를 메일로 전송
// 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return
function solution (id_list, report, k) {
    const timeOfReport = [];
    const bannedUser = [];
    const answer = [];

    for (let i = 0; i < id_list.length; i++) {
        timeOfReport.push(0);
        answer.push(0);
    };

    const uni_report = Array.from(new Set(report));

    const new_report = uni_report.map(e => e.split(" "));
    console.log("New Report: ", new_report);

    for (let i = 0; i < new_report.length; i++) {
        let reportedUserIndex = id_list.findIndex((user) => user === new_report[i][1]);
        timeOfReport[reportedUserIndex] += 1;
    };
    console.log("Time of report: ", timeOfReport);

    
    for (let i = 0; i < timeOfReport.length; i++) {
        if (timeOfReport[i] >= k) bannedUser.push(id_list[i]);
    };
    console.log("Banned User: ", bannedUser);

    const banningReport = new_report.filter(e => {
        if (bannedUser.includes(e[1])) {
            let reportingUserIndex = id_list.findIndex((user) => user === e[0]);
            answer[reportingUserIndex] += 1;
            return e;
        };
    });
    console.log("Banning Report: ", banningReport);

    return answer;
};

let id_list1 = ["muzi", "frodo", "apeach", "neo"];
let report1 = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];

let id_list2 = ["con", "ryan"];
let report2 = ["ryan, con", "ryan, con", "ryan, con", "ryan, con"];

console.log(solution(id_list1, report1, 2));

// 다른 사람 풀이
// Map을 이용하여 key와 value로 간단하게 
function solution2 (id_list, report, k) {
    // 신고 목록 중에서 중복된 값을 없애고 각 신고를 신고자와 신고대상자를 나눠줌
    let reports = [...new Set(report)].map(a => {return a.split(" ")});

    // counts(신고 수)를 Map으로 생성하여 신고대상자를 key로 
    // value는 발생할 때마다 +1을 해줌
    let counts = new Map();
    for (const bad of reports) {
        counts.set(bad[1], counts.get(bad[1] + 1 || 1));
    };

    // good(이용 정지된 신고 대상자의 모든 신고자)를 Map으로 생성하여 
    // 신고자를 key로 value는 해당 신고마다 +1을 해줌
    let good = new Map();
    for (const report of reports) {
        if (counts.get(report[1]) >= k) {
            good.set(report[0], good.get(report[0]) + 1 || 1);
        };
    };

    // id_list에서 good의 key에 이름이 있는 사람은 value를 담고 
    // 없으면 0을 담아서 answer 배열 생성
    let answer = id_list.map(a => good.get(a) || 0);

    return answer;
};
