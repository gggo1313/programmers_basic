// �ڿ��� n�� �Ű������� �־�����.
// n�� 3���� �󿡼� �յڷ� �����´�.
// �̸� �ٽ� 10�������� ǥ���Ͽ� return

// num.toString(3) 3�������� ����

function solution (n) {
    let temp = n.toString(3);
    let str = String(temp);
    let strReverse = str.split("").reverse().join("");

    let result = 0;
    for(let i = 0; i < strReverse.length; i++) {
        const leng = strReverse.length;
        result += strReverse[i] * Math.pow(3, (leng - i - 1));
        // console.log(result);
    };

    const answer = result;
    return answer;

};

const a = 45;
const b = 125;

solution(a);
solution(b);

// �ٸ� ��� ��

const answer = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
};

console.log(answer(a));
console.log(answer(b));