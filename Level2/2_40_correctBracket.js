// '(' ���ڷ� �������� �ݵ�� ¦��� ')' ���ڷ� ������ �ùٸ� ��ȣ
// �־��� ���ڿ� s�� �־����� �� ���ڿ� s�� �ùٸ� ��ȣ�̸� true, �ƴϸ� false
function solution (s) {
    let pair = 0;

    for (const bracket of s) {
        if (bracket === '(') pair += 1;
        if (bracket === ')') pair -= 1;
        if (pair < 0) return false;
    }

    return pair === 0;
};

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
console.log(solution("())()(()"));

// �ٸ� ��� Ǯ��
// s�� '('�� ')'�� �ִٴ� ���� �̿��Ͽ� �� �� �����ϰ� �Ǻ�
function solution2 (s) {
    let cum = 0;
    for (let paren of s) {
        cum += paren === '(' ? 1 : -1;
        if (cum < 0) {
            return false;
        };
    };

    return cum === 0 ? true : false;
}