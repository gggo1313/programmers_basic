// �Ű��ڿ� �Ű����� ���� ���ڿ��� �Էµ� �Ű��� �迭 report
// �Ű��� �� �Ű����� ��� ���Ե� �迭 id_list
// ������ "�Ű��� �Ű���"�� ��� �Ű� 1ȸ�� ó��
// kȸ �̻� �Ű���ϸ� �̿�����
// �̿������� �߻��ϸ� �ش� �Ű����� ��� �Ű��ڿ��� ó�� ����� ���Ϸ� ����
// �� �������� ó�� ��� ������ ���� Ƚ���� �迭�� ��� return
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

// �ٸ� ��� Ǯ��
// Map�� �̿��Ͽ� key�� value�� �����ϰ� 
function solution2 (id_list, report, k) {
    // �Ű� ��� �߿��� �ߺ��� ���� ���ְ� �� �Ű� �Ű��ڿ� �Ű����ڸ� ������
    let reports = [...new Set(report)].map(a => {return a.split(" ")});

    // counts(�Ű� ��)�� Map���� �����Ͽ� �Ű����ڸ� key�� 
    // value�� �߻��� ������ +1�� ����
    let counts = new Map();
    for (const bad of reports) {
        counts.set(bad[1], counts.get(bad[1] + 1 || 1));
    };

    // good(�̿� ������ �Ű� ������� ��� �Ű���)�� Map���� �����Ͽ� 
    // �Ű��ڸ� key�� value�� �ش� �Ű��� +1�� ����
    let good = new Map();
    for (const report of reports) {
        if (counts.get(report[1]) >= k) {
            good.set(report[0], good.get(report[0]) + 1 || 1);
        };
    };

    // id_list���� good�� key�� �̸��� �ִ� ����� value�� ��� 
    // ������ 0�� ��Ƽ� answer �迭 ����
    let answer = id_list.map(a => good.get(a) || 0);

    return answer;
};
