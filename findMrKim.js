// string array seoul�� elment �� "Kim"�� ��ġ x�� ã��
// "�輭���� x�� �ִ�"�� string�� return

function solution (seoul) {
    const x = seoul.findIndex((item) => {
        return item === "Kim";
    });

    return `�輭���� ${x}�� �ִ�`
};

console.log(solution(["Jane", "Kim"]));


// �ٸ� ��� Ǯ��
function findKim(seoul) {
    var idx = seoul.indexOf('Kim');
    return "�輭���� " + idx + "�� �ִ�";
};