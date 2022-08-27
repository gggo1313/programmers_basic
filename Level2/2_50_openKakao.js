// 유저의 동작 (Enter, Leave, Change)과 유저 아이디, 유저 닉네임이 메시지
// 메시지가 담긴 배열 record가 주어짐
// 방을 개설한 사람이 보게 되는 메시지를 문자열 배열 형태로 return
// 같은 유저아이디의 닉네임이 변경되면 이전 기록에서도 전부 변경
function solution (record) {
    const userId = {};
    const splitedRecord = record.map(v => {
        v = v.split(' ');
        if (v.length === 3) userId[v[1]] = v[2];
    });

    const answer = [];

    const message = record.map(alert => {
        alert = alert.split(' ');
        if (alert[0] === 'Enter') {
            answer.push(`${userId[alert[1]]}님이 들어왔습니다.`);
        } else if (alert[0] === 'Leave') {
            answer.push(`${userId[alert[1]]}님이 나갔습니다.`);
        };
    });

    return answer;
};

const record1 = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];

console.log(solution(record1));

function solution2 (record) {
    const userInfo = {};
    const action = [];
    const stateMapping = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
    };

    record.forEach(v => {
        const [state, id, nick] = v.split(' ');

        if(state !== "Change") {
            action.push([state, id]);
        };

        if (nick) {
            userInfo[id] = nick;
        };
    });

    return action.map(([state, uid]) => {
        return `${userInfo[uid]}${stateMapping[state]}`;
    });
};