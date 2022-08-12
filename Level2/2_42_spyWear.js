// �����̰� ������ �ִ� ���� [�ǻ��� �̸�, �ǻ��� ����]�� ���·� clothes �迭
// �ּ� 1���� �ǻ��� �Ծ�� �ϸ� ���� �ǻ��� ������ ���� ���� �� ����
// ���� �� �ִ� ������ ���� return
function solution (clothes) {
    let answer = 1;
    const obj = {};

    for (let i = 0; i < clothes.length; i++) {
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    };

    for (const key in obj) {
        answer *= obj[key];
    };

    return answer - 1;
};

const clothes1 = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];

console.log(solution(clothes1));

// �ٸ� ��� Ǯ��
// reduce�� �̿��Ͽ� object �����ϰ�
// reduce�� �̿��Ͽ� ����� return
function solution2 (clothes) {
    return Object.values(clothes.reduce((obj, t) => {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    }, {})).reduce((a, b) => a * (b + 1), 1) - 1;
}