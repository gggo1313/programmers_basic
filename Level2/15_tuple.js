// 튜플열의 맨 앞 숫자부터 
let s1 = "{{4,2,3},{3},{2,3,4,1},{2,3}}";
function solution (s) {
    const answer = [];
    let preprocess = s.slice(2, -2)
                      .split("},{")
                      .map(set => set.split(",").map(x => parseInt(x)))
                      .sort((a, b) => a.length - b.length);
    
    for (const set of preprocess) {
        answer.push(...set.filter(x => !answer.includes(x)))
    };

    return answer;
};

console.log(solution(s1));