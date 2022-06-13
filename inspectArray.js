// �־��� ���ڿ� s�� ���̰� 4 Ȥ�� 6�̰�, 
// ���ڷθ� �����Ǿ� ������ True �ƴϸ� false�� return

function solution (s) {
    if (s.length != 4 && s.length != 6) {
       return false;
    };

    for (let i = 0; i < s.length; i++) {
        if(isNaN(s[i])) {
            return false;
        };
    }

    return true;
};

console.log(solution("a1234"));
console.log(solution("1234"));
console.log(solution("-234"));

// ���� ������ false�� ��ȯ�Ǿ�� �ϴ� ������ �־���

// �ٸ� ��� Ǯ��
function solution2 (s) {
    if(s * 1 + '' == s && Math.abs(5 - s.length) === 1) return true;
    // ���ڷθ� �̾������� Ȯ���ϴ� ����� s * 1 + '' == s
    // ���ڿ��� ���̰� 4 Ȥ�� 6�� Ȯ���ϴ� ����� Math.abs(5 - s.length === 1)
    return false;
};