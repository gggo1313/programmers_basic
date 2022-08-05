// �ִ� 2�� Ż �� �ִ� ����Ʈ
// ����Ʈ���� ���� ���� limit�� ����
// ������� �����Ը� ���� �迭 people
// ��� ����� �����ϱ� ���� �ʿ��� ����Ʈ ������ �ּҰ��� return
function solution (people, limit) {
    let count = 0;

    // people�� ������������ ����
    people.sort((a, b) => a - b);

    while (people.length) {
        const leng = people.length;

        // �� �����͵� ���� Ż �� ������ ���� �ο� ���� count�� ����
        if (people[0] + people[1] > limit) {
            count += leng;
            break;
        }
        
        for (let i = leng - 1; leng > 1; i--) {  
            if (people[0] + people[i] <= limit) {
                // �� �� index�� �������� �� �ڿ������� ���� ���ļ� 
                // limit�� �ѱ��� �ʴ� �ִ� ���԰��� �ε����� ã��
                // ������ �����ϰ� count + 1
                people.splice(i, 1);
                people.shift();
                count++;
                break;
            };
        };
    };

    return count;
};

let people1 = [70, 50, 80, 50];
let people2 = [70, 80, 50];

console.log(solution3(people1, 100));
console.log(solution3(people2, 100));

// ���� �¾����� ȿ�����׽�Ʈ ����
// �� �ڿ��� limit �Ѱܼ� �Ѿ ������ ��� �ߺ��ؼ� ������ֱ� ������ 
// �������� limit �Ѿ�� ���� �ٷ� count�ϰ� �Ѿ�� ������� ����
function solution2 (people, limit) {
    let count = 0;

    people.sort((a, b) => a - b);

    let front = 0;
    let back = people.length - 1;

    while (front < back) {
        // �������� limit �Ѿ�� index ���̰� count + 1
        if (people[front] + people[back] > limit) {
            back--;
        } else {
            // ���� Ż �� ������ �յ� �ε��� �����ϰ� count + 1
            back--;
            front++;
        };

        count++;
    };

    // �յ� �ε����� �������� ���� ����̹Ƿ� count + 1
    if (front === back) count++;

    return count;
};

// �ٸ� ��� Ǯ��
// for�� ���ǿ� j���� �߰��Ͽ� �յڸ� �� ���� for������ ���
// �տ������� ���� ź ����� ���� ī�����ؼ� ���� return
function solution3 (people, limit) {
    let count = 0;

    people.sort((a, b) => a - b);

    for (let i = 0, j = people.length - 1; i < j; j--) {
        if (people[i] + people[j] <= limit) {
            i++;
            count++;
        };
    };

    return people.length - count;
};