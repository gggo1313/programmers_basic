// ���� ������ ���Ұ� ������� elements�� �־���
// ���� �κ� ���� ������ ������ ���� �� �ִ� ���� ������ return

const solution = (elements) => {
    const sumResult = [];

    for (let i = 1; i <= elements.length; i++) {
        let arr = [...elements];

        for (let k = 0; k < i - 1; k++) {
            arr.push(elements[k]);
        };

        for (let j = 0; j < elements.length; j++) {
            let sum = 0;

            for (let k = j; k < j + i; k++) {
                console.log(k);
                sum += arr[k];
            };
            console.log("i: ", i, "sum: ", sum);

            sumResult.push(sum);
        };
    };

    const answer = new Set(sumResult);

    return answer.size;
};

const elements1 = [7, 9, 1, 1, 4];

console.log(solution(elements1));

// �ٸ� ��� Ǯ��
// �Ϲ����� set ����
// ������ 1�ܰ� �� ���̱�
function solution2 (elements) {
    const circular = elements.concat(elements); // ������ �� �� ���̸� ��� ���� �κ� ������ ��Ÿ�� �� ����
    const set = new Set(); // �������ְ� �������

    for (let i = 0; i < elements.length; i++) { // ���� �κ� ���� ������
        let sum = 0;

        for (let j = 0; j < elements.length; j++) {
            // ���� �κ� ���� ���������� ���� �� �ִ� ��� ũ���� �κ� ������ ��
            sum += circular[i + j]; 
            set.add(sum);
        };
    };

    return set.size;
};