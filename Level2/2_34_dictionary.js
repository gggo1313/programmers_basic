// 'A', 'E', 'I', 'O', 'U'�θ� �̷���� ���� 5 ������ �ܾ ����
// ������ AEIOU
// �ܾ� word�� �Ű������� �־��� �� �������� �� ��° �ܾ����� return
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

// �ٸ� ��� Ǯ��
// ���� Ž���� �ƴ� �ּ��� ������� Ǫ�� ���
function solution2 (word) {
    return word.split("").reduce((r, c, i) => r + [781, 156, 31, 6, 1][i] * ['A' , 'E', 'I', 'O', 'U'].indexOf(c) + 1, 0);
};