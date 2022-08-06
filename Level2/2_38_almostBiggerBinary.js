// 2�������� ���ڰ� 1~2���� �ٸ��� ũ��� �� ū ���� ���� ���� ��ȯ
// �������� ��� �迭 numbers�� ��� ���� ���� ���� ������� ��ȯ�Ͽ� return
function solution (numbers) {
    // �� ���Ҹ� 2������ ��ȯ�ϰ� ������ �迭�� ����
    const answer = numbers.map((v => {
        // ¦���� ���� +1
        if (v % 2 === 0) {
            return v * 1 + 1;
        } else {
            const temp = v.toString(2).split("").reverse();
            
            for (let i = 0; i < temp.length; i++) {
                // ���� 1�� ��� �� �ڸ� 0���� �ٲٰ� 1 �߰�
                if (
                    temp.reduce((acc, cur) => acc + cur * 1, 0) === temp.length
                ) {
                    temp[temp.length - 1] = 0;
                    temp.push(1);
                    break;
                } else if (temp[i] * 1 === 0 && i !== 0) {
                    // �� index���� ���� 0�̸� +1�ϰ� ���� index�� ���� 0���� ����
                    temp[i] = 1;
                    temp[i - 1] = 0;
                    break;
                } ;
            };

            // �ٽ� ������ ���ļ� int ������ ����
            const re = parseInt(temp.reverse().join(""), 2)
            return re;
        };
    }));
    
    return answer;
};

console.log(solution([2, 7]));

// �ٸ� ��� Ǯ��
// ���ʷ� 0�� ��Ÿ���� �ε����� ���� ã��
function solution2 (numbers) {
    let c;
    
    numbers.forEach(v => {
        // 1�̳� 2�� ����� ��� 1�� ���ؼ� �迭�� �߰�
        if (v < 2 || v % 2 === 0) {
            answer.push(v + 1);
        } else {
            let c = 2;
            while (true) {
                if ((v + 1) % (c * 2) === 0) {
                    c = c * 2;
                } else {
                    // �� ��� �� c�� 2�� ������ ���ʷ� 0�� ��Ÿ���� �ڸ�
                    break;
                };
            };

            // c / 2�� ���ʷ� 0�� ��Ÿ���� ������ �ڸ��� 1
            answer.push(v + (c / 2));
        };
    });

    return answer;
}