// ��ü �л� �� n
// ü������ �Ҿ���� �л��� ��ȣ�� ��� �迭 lost
// ������ ü������ ������ �л����� ��ȣ�� ��� �迭 reserve
// �Ҿ���� �л��� �ڱ� ��ȣ�� ���Ʒ� 1�� ���̱����� ü������ ���� �� ����
// ������ ü������ �Ҿ���� �л��� ������ �� ����
// ü�������� ���� �� �ִ� �л��� �ִ밪�� return

function solution (n, lost, reserve) {
    // ���� ������ �� �ִ�/������ �� �ִ� �л��� ��ȣ(������ ü������ ����)
    let realReserve = reserve.filter(e => !lost.includes(e)).sort((a, b) => a - b);
    const realLost = lost.filter(e => !reserve.includes(e)).sort((a, b) => a - b);

    // ��������
    let count = 0;

    realLost.forEach(e => {
        // ������ ü������ ������ �������� ����
        if (realReserve.length === 0) {
            return;
        }

        // ���� ��ȣ ���� �л����� ü���� ������
        // �ڱ� ��ȣ -1 ���� ������ ü������ ã��
        // �������� ������ �� �ִ� ��Ͽ��� ����
        if (realReserve.includes(e - 1)) {
            realReserve = realReserve.filter(f => f !== e - 1);
            count++;
        }
        else if(realReserve.includes(e + 1)) {
            realReserve = realReserve.filter(f => f !== e + 1);
            count++;
        };
    });

    return n - realLost.length + count;
};

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));

// �ٸ� ��� Ǯ��
// ���� ª�� �ڵ�
function solution2 (n, lost, reserve) {
    let realReserve = reserve.filter(e => !lost.includes(e)).sort((a, b) => a - b);
    let realLost = lost.filter(e => !reserve.includes(e)).sort((a, b) => a - b);

    return n - realLost.filter(a => {
        // realLost�� �ִ� element�� ���� ���̰� 1�� realReserve�� element b
        const b = realReserve.find(r => Math.abs(r - a) <= 1) 
        // realReserve�� ���� ���̰� 1�� element�� ������ realLost�� ���� element�� �Ѿ
        if(!b) return true;
        // b�� �����ϸ� realReserve���� ������
        reserve = reserve.filter(r => r !== b); 
    }).length // ��ü �л� ������ �� �̻� ������ �� ���� �л� ���� ����
};

// �������� �ǵ��� ���� ������ �� ���� �ڵ�
function solution3 (n, lost, reserve) {
    const students = {};
    let answer = 0;

    // �⺻���� ��� �л��� ü������ ������ �ִٰ� ����
    for (let i = 1; i <= n; i++) {
        students[i] = 1;
    };

    // �Ҿ������ ��� -1, ������ �ִ� ��� +1
    lost.forEach(number => students[Number] -= 1);
    reserve.forEach(number => students[number] += 1);

    // ��������
    for (let i = 1; i <= n; i++) {
        // ������ �ִ� �л� ���� ��ȣ�� �л��� ü���� ���� ���
        if (students[i] === 2 && students[i - 1] === 0) {
            students[i - 1] += 1;
            students[i] -= 1;
        }
        // ������ �ִ� �л� ���� ��ȣ�� �л��� ü���� ���� ���
        else if (students[i] === 2 && students[i + 1] === 0) {
            students[i + 1] += 1;
            students[i] -= 1;
        };
    }

    // ü���� �԰� ���� �� �ִ� �л� ��
    for (let key in students) {
        if (students[key] >= 1) {
            answer++;
        };
    };

    return answer;
}