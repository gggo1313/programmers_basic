// ������ ������(participants) �߿��� 1�� ���� ��� ����(completion)
// Ż���� �̸��� return
// �ߺ��� �̸� ���� �� ����

// participants�� completion�� sort()
// �� �迭�� ���� index�� ���� ���� ������ return

function solution (participant, completion) {
    participant.sort();
    completion.sort();
    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
            console.log(participant[i]);
            return participant[i];
        }
    }
};

const arr11 = ["leo", "kiki", "eden"];
const arr12 = ["eden", "kiki"];
const arr21 = ["marina", "josipa", "nikola", "vinko", "filipa"];
const arr22 = ["josipa", "filipa", "marina", "nikola"];
const arr31 = ["mislav", "stanko", "mislav", "ana"];
const arr32 = ["stanko", "ana", "mislav"];

solution(arr11, arr12);
solution(arr21, arr22);
solution(arr31, arr32);