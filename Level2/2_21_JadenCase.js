// �� �� ���ڸ� �빮���̰� �������� �ҹ��ڷ� ����� ���� JadenCase
// ����, ���ĺ�, ���鸸 �ִ� ���ڿ� s�� �־����� �� s�� JadenCase�� return


function solution (s) {
    s = s.toLowerCase();
    const answer = [];
    let arr = s.split(" ").map(v => v.split(""));

    for (let up of arr) {
        // �� ���ڿ��� ��� �н�
        // ���ڿ��� �����ϴ� ��� ����
        if (up[0]) up[0] = up[0].toUpperCase();
        
        answer.push(up.join(""));
    };

    return answer.join(" ");
};

// console.log(solution("3people unFollowed me"));
// ��������� ���鹮�� ������ �����Ǿ�� �ϴ� ���� ������
// ���ڿ��� ���� ���� ���� Array.join(" ")���� ������ ��
// ���� ���鹮�� ���� �״�� �������� �͵� ������

console.log(solution3("a    a a  a   a"))

// �ٸ� ��� Ǯ��
function solution2 (s) {
    s = s.toLowerCase()
    var answer = s.split(" ").map(s => {
        let arr = s.split("")
        if(arr[0] != null)
           arr[0] = arr[0].toUpperCase();
        return arr.join('');
    });

    console.log(answer);

    return answer.join(" ");
};

// �迭 �ε����� �����ϸ� �� ���ڿ��� undefined�� �ߵ��Ͽ� string.toUpperCase()�� ��Ÿ�� ����
// charAt���� �����ϸ� �� ���ڿ��� �� ���ڿ��� ��ȯ
function solution3 (s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}