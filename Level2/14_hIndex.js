// ���� �ο� Ƚ���� ���� �迭 citations
// h�� �̻� �ο�� ���� h�� �̻��̰� ������ ���� h�� ���� �ο�
// h�� �ִ밪 H-Index�� return
function solution (citations) {
    citations.sort((a, b) => b - a);
    console.log(citations);

    let h = 0;

    while (h + 1 <= citations[h]) h++;
    answer = h;

    return answer;
};

let c1 = [3, 0, 6, 1, 5];

console.log(solution(c1));