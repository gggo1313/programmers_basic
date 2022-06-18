// ������ �� ���� ���̰� n�� ���簢�� �迭
// �� ĭ�� "����"(" ") �Ǵ� "��"("#") �� ����
// ��ü ������ �� ���� ������ ������ �� �� �� �����̸� ���� �ƴ϶�� ��
// "���� 1"�� "���� 2"�� ������ 0, ���� 1�� ǥ���� 2������ 10������ �Ǿ� ����
// n, ���� 1(arr1), ���� 2(arr2)�� �־����� �� �ص��Ͽ� 
// "#"�� " "�� ������ ���ڿ� �迭�� return

function solution (n, arr1, arr2) {
    // arr1�� arr2�� 2������ ��ȯ
    const arr1_to2 = arr1.map(e => e.toString(2));
    const arr2_to2 = arr2.map(e => e.toString(2));

    // �ڸ��� �����ֱ�
    for (let i = 0; i < n; i++) {
        // arr1_to2
        if(arr1_to2[i].length !== n) {
            while(arr1_to2[i].length !== n) arr1_to2[i] = '0' + arr1_to2[i];
        };
        // arr2_to2
        if(arr2_to2[i].length !== n) {
            while(arr2_to2[i].length !== n) arr2_to2[i] = '0' + arr2_to2[i];
        };
    };

    const answer = [];

    for (let i = 0; i < n; i++) {
        let temp =[];

        for (let j = 0; j < n; j++) {
            if (arr1_to2[i][j] === '0' && arr2_to2[i][j] === '0') {
                temp.push(" ");
            } else {
                temp.push("#");
            };
        };

        answer.push(temp.join(''));
    };

    return answer;
};

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));

// �ٸ� ��� Ǯ��
// ���Խ� ���
// single vertical bar
// �� ���� 2������ ��ȯ�ؼ� ���ؼ� 
// ���� �ڸ��� �� �� 0�̸� 0
// �ϳ��� �ڸ����� �����ϰ� �ٸ� �ϳ��� �ڸ����� ������ �����ϴ� ���� ��
// �� �� 0�� �ƴ϶�� 1�� ��ȯ
// 19|17 = 19
// 16|7 = 23
function solution2 (n, arr1, arr2) {
    var answer = [];
    let c;

    for (let i = 0; i < n; i++) {
        c = (arr1[i]|arr2[i]).toString(2).replace(/1/g, "#").replace(/0/g, " ");

        while(c.length != n) {
            c = " " + c;
        };

        answer.push(c);
    };

    return answer;
};

console.log(17|19);