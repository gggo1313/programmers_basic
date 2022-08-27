// 토너먼트에서 A 번째에 위치한 선수와 B번째에 위치한 선수
// 두 선수가 몇 라운드에서 만나는지 return
function solution (n, a, b) {
    let answer = 1;
    let max = 0;

    while (n > 1) {
        n = n / 2;
        max++;
    };

    for (let i = 0; i < max; i++) {
        const ref = 2 ** (i + 1);

        if (parseInt((a - 1) / ref) === parseInt((b - 1) / ref)) break;

        answer++;
    };

    return answer;
};

console.log(solution(8, 4, 7));

// 다른 사람 풀이
// n을 쓰지 않고 바로 계산
function solution2 (n, a, b) {
    let answer = 0;
    
    while (a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    };

    return answer;
};