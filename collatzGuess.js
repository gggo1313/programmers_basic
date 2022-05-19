// �Էµ� ���� ¦����� 2�� ����
// �Էµ� ���� Ȧ����� 3�� ���ϰ� 1�� ����
// 1�� �� ������ �ݺ�
// �� �� �ݺ��ߴ����� return
// 500���� �ݺ��ص� 1�� ���� �ʴ´ٸ� -1�� return

function solution (num) {
    let count = 0;
    while(num != 1) {
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }

        count += 1;
        if (count == 500) {
            break;
        }
    }
  
    console.log(count);

    if (count < 500) {
        return count;
    } else {
        return -1;
    }
};

console.log("return: " + solution(6));
console.log("return: " + solution(8));
console.log("return: " + solution(626331));

// �ٸ� ��� �亯
function collatz(num) {
    let answer = 0;
    while(num != 1 && answer != 500) {
        num % 2 == 0 ? num = num / 2 : num = num * 3 + 1;
        answer++;
    }

    return num == 1 ? answer : -1;
}

function collatz2(num, count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : collatz2(num % 2 == 0 ? num = num / 2 : num = num * 3 + 1, ++count);
}

console.log(collatz(62));
console.log(collatz2(62));