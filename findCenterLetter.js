// �ܾ� s�� ��� ���ڸ� return
// �ܾ��� ���̰� ¦���� ��� �� ���ڸ� return

function solution (s) {
    return s.length % 2 ? s[Math.floor(s.length / 2)] : s[s.length / 2 - 1] + s[s.length / 2]
};

console.log(solution("abcde"));
console.log(solution("qwer"));

// �ٸ� ��� Ǯ��
// arr.substr(n, m): arr ���ڿ��� �ε��� n���� m���� ��ȯ
function solution2 (s) {
    return s.length % 2 === 0 ? s.substr(s.length / 2 - 1, 2 ) : s.substr(Math.floor(s.length / 2), 1);
}