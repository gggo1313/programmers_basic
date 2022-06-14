// �� �μ��� �ʿ��� ��ǰ�� �����ؾ� ��
// ������ �����ؼ� ��� �μ��� ��ǰ�� �������� �� ����
// ��ǰ�� ������ ���� �� ���� �ݾ����� ������ �� ����
// �μ����� ��û�� �ݾ��� �ִ� �迭 d�� ���� budget�� �־��� ��
// �ִ� �� ���� �μ��� ��ǰ�� ������ �� �ִ��� return

function solution (d, budget) {
    const sorted = d.sort((a, b) => a - b);
    let sum = 0;
    let answer = 0;

    for (let i = 0; i < sorted.length; i++) {
        sum += sorted[i];

        if(sum > budget) {
            break;
        };
        
        answer += 1;
    };

    return answer;
};

const d1 = [1, 3, 2, 5, 4];
const d2 = [2, 2, 3, 3];

console.log(solution(d1, 9));
console.log(solution(d2, 10));

// �ٸ� ��� Ǯ��
// �����ʰ��� ������ �ʰ� ���� ���� ��� answer++ �� �� �����ϰ�
function solution2(d, budget) {
    let answer = 0;
    let money = 0;
    d.sort((a, b) => a - b).forEach(function(val) {
        money += val;
        if (money <= budget){
            answer++;
        };
    });

    return answer;
}