function solution (s) {
    let minLength = s.length;

    for (let i = 1; i <= parseInt(s.length / 2); i++) {
        let prev = s.substr(0, i);
        let count = 1;
        let temp = "";

        for (let j = i; j < s.length; j += i) {
            const cur = s.substr(j, i);

            if (prev === cur) count++;
            else {
                temp += (count > 1 ? String(count) : "") + prev;
                count = 1;
                prev = cur;
            };
        };

        temp += (count > 1 ? String(count) : "") + prev;

        minLength = Math.min(minLength, temp.length);
    };

    return minLength;
};

const s1 = "aabbaccc";
const s2 = "ababcdcdababcdcd";
const s3 = "abcabcdede";
const s4 = "abcabcabcabcdededededede";
const s5 = "xababcdcdababcdcd";

console.log(solution(s4));