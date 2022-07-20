// 2 �̻��� n�� �Է����� �� n��° �Ǻ���ġ���� 1234567�� ���� �������� return



function solution (n) {
    const fibo = [0, 1];

    for (let i = 1; i < n; i++) {
        let leng = fibo.length;
        let next = fibo[leng - 2] + fibo[leng - 1];
        // overflow ����Ͽ� �� �ܰ迡�� 1234567�� ���� �������� �߰�
        fibo.push(next % 1234567); 
    };

    const answer = fibo[n];

    return answer;
};

console.log(solution(5))