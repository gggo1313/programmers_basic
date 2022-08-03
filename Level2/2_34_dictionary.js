// 'A', 'E', 'I', 'O', 'U'로만 이루어진 길이 5 이하의 단어가 수록
// 순서는 AEIOU
// 단어 word가 매개변수로 주어질 때 사전에서 몇 번째 단어인지 return
function solution (word) {
    const order = ['A', 'E', 'I', 'O', 'U'];
    const dict = [];

    const getDict = (curWord, depth) => {
        if (depth === 6) return;

        dict.push(curWord);

        for (const nextLetter of order) {
            getDict(curWord + nextLetter, depth + 1);
        };
    };

    order.forEach((letter) => {
        getDict(letter, 1);
    });

    return dict.indexOf(word) + 1;
};

console.log(solution("AAAAE"));
console.log(solution("AAAE"));

// 다른 사람 풀이
// 완전 탐색이 아닌 최소의 계산으로 푸는 방법
function solution2 (word) {
    return word.split("").reduce((r, c, i) => r + [781, 156, 31, 6, 1][i] * ['A' , 'E', 'I', 'O', 'U'].indexOf(c) + 1, 0);
};