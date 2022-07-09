// 논문의 인용 횟수를 담은 배열 citations
// h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용
// h의 최대값 H-Index를 return
function solution (citations) {
    citations.sort((a, b) => b - a);
    console.log(citations);

    let h = 0;

    while (h + 1 <= citations[h]) h++;
    answer = h;

    return answer;
};

let c1 = [3, 0, 6, 1, 5];

console.log(solution(c1));