// �ڿ��� n�� �Ű�����
// n�� x�� ���� �������� 1�� �ǵ��� �ϴ� ���� ���� �ڿ��� x�� return
// 3 <= n <= 1,000,000

function solution (n) {
    let answer = 0;
    for(i = 1; i < n; i++) {
        if (n%i == 1) {
            answer = i;
            break;
        };
    };
    return answer;
};

console.log(solution(10));
console.log(solution(12));