// ���� ���� �۾����� ��� �迭 works
// �۾��� �� �ִ� �ð� N ��ŭ works���� �۾����� ���ҽ�ų �� ����
// ��� ����� �� �۾����� ������ ��
// ��� ����� �ּҰ��� return
function solution (N, works) {
    const leng = works.length;
    // ����. N�� works�� �պ��� ���� ������ 0�� return
    if (N >= works.reduce((prev, cur) => {
        return prev + cur
    }, 0)) return 0;

    for (let i = 1; i <= N; i++) {
        // 1. works �߿��� ���� ū ���� ã�´�
        works.sort((a, b) => a - b);
        console.log(works);

        // 2. ���� ū ���� 1 ��´�
        works[leng - 1]--;
    };
    // 3. Nȸ �ݺ��Ѵ�

    const answer = works.reduce((prev, cur) => {
        return prev + cur ** 2;
    }, 0);
    
    return answer;
};

let works1 = [4, 3, 3];
let works2 = [3, 3, 3];

console.log(solution(4, works1));
console.log(solution(2, works2));