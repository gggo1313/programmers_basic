// ���ڿ� s�� �� �� �̻��� �ܾ�� ������ string
// �� �ܾ��� Ȧ����° ���ڴ� �ҹ���, ¦����° ���ڴ� �빮�ڷ� ���ڿ��� return

function solution (s) {
    let arr = s.split(' ');
    let answer = [];
    console.log(arr);
    console.log(arr[0]);
    console.log(arr[0].split(' '));
    for (let i = 0; i < arr.length; i++) {
        answer.push(arr[i].split('').map((cur, j) => j % 2 ? cur.toLowerCase() : cur.toUpperCase()).join(''))
    }

    return answer.join(" ");
};

console.log(solution("try hello world"));

// �ٸ� ��� Ǯ��

function toWeirdCase(s) {
    return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j.toLowerCase()).join('')).join(' ');
};