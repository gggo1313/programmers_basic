// ��ȣ�� �ùٸ��� ���ΰ� ������ �ùٸ� ��ȣ ���ڿ�
// �־��� ���ڿ� s�� �������� xĭ��ŭ ȸ�������� ��
// s�� �ùٸ� ��ȣ ���ڿ��� �ǰ� �ϴ� x�� ������ return
function solution (s) {
    if (s.length % 2 === 1) return 0;
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        let str = s.slice(i) + s.slice(0, i);
        const stack = [];
        let flag = 1;

        for (let n of str) {
            if (n === "(" || n === "{" || n === "[") stack.push(n);
            else {
                const bracket = stack.pop(); 
                if (n === ")" && bracket === "(") continue;
                if (n === "}" && bracket === "{") continue;
                if (n === "]" && bracket === "[") continue;
                flag = 0;
                break;
            };
        };

        if (flag) answer++;
    };
    return answer;
};

const s1 = "[](){}";
const s2 = "}]()[{";
const s3 = "[)(]";
const s4 = "}}}";

console.log(solution2(s1));
console.log(solution2(s2));
console.log(solution2(s3));
console.log(solution2(s4));

// �ٸ� ��� Ǯ��
// objectȭ �ؼ� ������ ���� ���� ������ ��
function solution2 (s) {
    if (s.length % 2 === 1) return 0;
    let answer = 0;
    const mapping = {"}" : "{", "]" : "[", ")" : "("};

    for (let i = 0; i < s.length; i++) {
        let str = s.slice(i) + s.slice(0, i);
        const stack = [];
        let flag = 1;

        for (let n of str) {
            if (n === "(" || n === "{" || n === "[") stack.push(n);
            else {
                const bracket = stack.pop(); 
                if (bracket !== mapping[n]) {
                    flag = 0;
                    break;
                };                
            };
        };

        if (flag) answer++;
    };
    return answer;
};