// ������ ���� (Enter, Leave, Change)�� ���� ���̵�, ���� �г����� �޽���
// �޽����� ��� �迭 record�� �־���
// ���� ������ ����� ���� �Ǵ� �޽����� ���ڿ� �迭 ���·� return
// ���� �������̵��� �г����� ����Ǹ� ���� ��Ͽ����� ���� ����
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
            answer.push(`${userId[alert[1]]}���� ���Խ��ϴ�.`);
        } else if (alert[0] === 'Leave') {
            answer.push(`${userId[alert[1]]}���� �������ϴ�.`);
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
        'Enter': '���� ���Խ��ϴ�.',
        'Leave': '���� �������ϴ�.'
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