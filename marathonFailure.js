// 마라톤 참가자(participants) 중에서 1명만 빼고 모두 완주(completion)
// 탈락자 이름을 return
// 중복된 이름 있을 수 있음

// participants와 completion을 sort()
// 두 배열의 같은 index에 같은 값이 없으면 return

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