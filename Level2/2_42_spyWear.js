// 스파이가 가지고 있는 옷이 [의상의 이름, 의상의 종류]의 형태로 clothes 배열
// 최소 1개의 의상은 입어야 하며 같은 의상의 종류는 같이 입을 수 없음
// 입을 수 있는 조합의 수를 return
function solution (clothes) {
    let answer = 1;
    const obj = {};

    for (let i = 0; i < clothes.length; i++) {
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    };

    for (const key in obj) {
        answer *= obj[key];
    };

    return answer - 1;
};

const clothes1 = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];

console.log(solution(clothes1));

// 다른 사람 풀이
// reduce를 이용하여 object 생성하고
// reduce를 이용하여 결과값 return
function solution2 (clothes) {
    return Object.values(clothes.reduce((obj, t) => {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    }, {})).reduce((a, b) => a * (b + 1), 1) - 1;
}