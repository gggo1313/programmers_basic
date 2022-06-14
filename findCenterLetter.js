// �ܾ� s�� ��� ���ڸ� return
// �ܾ��� ���̰� ¦���� ��� �� ���ڸ� return

function solution (s) {
    return s.length % 2 ? s[Math.floor(s.length / 2)] : s[s.length / 2 - 1] + s[s.length / 2]
};

console.log(solution("abcde"));
console.log(solution("qwer"));

// �ٸ� ��� Ǯ��
// str.substr(n, m): str ���ڿ��� �ε��� n���� m���� ��ȯ
function solution2 (s) {
    return s.length % 2 === 0 ? s.substr(s.length / 2 - 1, 2 ) : s.substr(Math.floor(s.length / 2), 1);
}

// str.slice(n, m): str ���ڿ��� �ε��� n���� m���� ��ȯ
function solution3 (s) {
    var length = s.length;
    var answer = '';

    if (!(s.length > 0 && s.length < 100)) {
        return;
    };

    if(length % 2 != 0) {
        answer += s.slice(length / 2, length / 2 + 1);
    } else {
        answer += s.slice(length / 2 - 1, length / 2 + 1);
    };

    return answer;
};