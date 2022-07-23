// �������� ���е� ���ڵ��� ���ڿ� s�� ����
// "�ּҰ� �ִ밪" ������ ���ڿ��� return
function solution (s) {
    let temp = [];
    let arr = s.split(" ");

    temp.push(Math.min(...arr));
    temp.push(Math.max(...arr));

    const answer = temp.join(" ");

    return answer;
};

let s1 = "1 2 3 4";
let s2 = "-1 -2 -3 -4";
let s3 = "-1 -1";

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));

// �ٸ� ��� Ǯ��
// join ���� + �� �ذ�
function solution2 (s) {
    const arr = s.split(' ');

    return Math.min(...arr) + ' ' + Math.max(...arr);
};