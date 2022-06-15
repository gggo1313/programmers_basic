// ���������� ���� N(1 ~ 500)
// ����ڰ� ���� Ŭ�������� ���� ���������� �迭(1 ~ 200,000)
// stages�� �� �߿��� N+1�� ���� Ŭ������ ������� ������
// �������� ���� ������������ ������������ ���������� ��ȣ�� ����ִ� �迭�� return
// �������� ���� ���������� �ִٸ� ���� ��ȣ�� ���������� ���� ��Ÿ��
// ���������� ������ ������ ���� ��� �ش� ���������� �������� 0

function solution (N, stages) {
    // �� �������� ���� Ŭ�������� ���� ���� ��
    const numOfFailUser = [];

    for (let i = 0; i < N; i++) {
        let filtered = stages.filter(e => e === i + 1);

        numOfFailUser.push(filtered.length);        
    };

    console.log("Number of Failed user: ", numOfFailUser);

    // �� �������� �� ������
    let temp = stages.length;

    const failureRate = numOfFailUser.map((v, i) => {
        if(i > 0) temp = temp - numOfFailUser[i - 1];

        // ���������� ������ ������ ������ �������� 0
        let rate = v / temp;
        if(temp === 0) rate = 0;

        return [i + 1, rate]; 
    });

    console.log("Failure rate of stages: ", failureRate);

    // �������� ������ ����
    const rankOfFailureRate = failureRate.sort((a, b) => {
        // �������� ���� ��� ���� ��ȣ�� ���������� �տ�
        if (b[1] === a[1]) a[0] - b[0];
        return b[1] - a[1];
    }).map(e => e[0]);

    console.log("Rank of failure rate: ", rankOfFailureRate);

    return rankOfFailureRate;
};

let stages1 = [2, 1, 2, 6, 2, 4, 3, 3];
let stages2 = [4, 4, 4, 4, 4];

console.log(solution(5, stages1));
console.log(solution(4, stages2));

// �ٸ� ��� Ǯ��
function solution2 (N, stages) {
    let result = [];

    for (let i = 1; i <= N; i++) {
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;

        result.push([i, curr / reach]);
    };

    result.sort((a, b) => b[1] - a[1]);
    
    console.log("Sol2");
    return result.map((x) => x[0]);
};

console.log(solution2(5, stages1));
console.log(solution2(5, stages2));
// Fatal JavaScript invalid size error 169220804
// FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory