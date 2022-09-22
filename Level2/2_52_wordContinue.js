// 끝말잇기에 참여한 사람 수 n, 발언한 단어 words
// 틀린 사람의 번호와 몇 번째에 틀렸는지 return
// 아무도 틀리지 않으면 (0, 0) return
function solution (n, words) {
    let index;
    let order;
    const list = [];

    for (let i = 0; i < words.length; i++) {

        if (list.includes(words[i])) {
            index = i % n + 1;
            order = parseInt(i / n) + 1;
            return [index, order];
        } else if (!list[i - 1]) {
            list.push(words[i]);
        } else {
            let leng = list[i - 1].length;
            let prev = list[i - 1][leng - 1];
            let cur = words[i][0];

            if (prev !== cur) {
                index = i % n + 1;
                order = parseInt(i / n) + 1;
                return [index, order];
            } else {
                list.push(words[i]);
            };
        };
    };

    return [0, 0];
};


const words1 = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];
const words2 = 	["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"];
const words3 = ["hello", "one", "even", "never", "now", "world", "draw"]

console.log(solution(3, words1));
console.log(solution(5, words2));
console.log(solution(2, words3));

// 다른 사람 풀이
// reduce만을 이용한 간단한 풀이
function solution2 (n, words) {
    let answer = 0;
    words.reduce((prev, cur, idx) => {
        answer = answer || ((words.slice(0, idx).indexOf(cur) !== -1 || prev !== cur[0]) ? idx : answer);
        return now[now.length - 1];
    }, "");

    return answer ? [answer % n + 1, Math.floor(answer / n) + 1] : [0, 0];
};