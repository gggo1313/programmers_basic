// 0�� 1�� �̷���� ���ڿ� x
// x�� ��� 0�� ������ ���� ���̸� 2�������� ǥ���� ���ڿ��� ��ȯ
// �־��� ���ڿ� s�� ���� ��ȯ�� �� ��,
// 1�� �� �������� ��ȯ Ƚ���� ���ŵ� 0�� ������ �迭�� ��� return
function solution (s) {
    let numOf0 = 0;
    let count = 0;

    while (s !== "1") {
        let prev = s.length;
        
        s = s.match(/1/g).join("");

        let cur = s.length;
        s = cur.toString(2);

        numOf0 += prev - cur;
        count++;
    };

    return [count, numOf0];
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));
