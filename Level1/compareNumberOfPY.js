// ���ڿ� s�� �ִ� p�� ������ y�� ������ ���� ������ True, �ٸ��� False�� return
// s���� �빮�ڿ� �ҹ��ڰ� ���� ������, p, y�� ������ �빮�� �ҹ��� ���� ����

function solution (s) {
    const upperA = s.toUpperCase();
    const numP = upperA.split('').filter((item) => {
        return item === "P";
    });
    const numY = upperA.split('').filter((item) => {
        return item === "Y";
    }); 

    return numP.length == numY.length ? true : false;
};

console.log(solution("pPoooyY"));
console.log(solution("PyY"));


// �ٸ� ��� Ǯ��
// split("X").length �����ε� �񱳰� ������
// ���� ���̰� ������ �� �������� true, false ��ȯ ����
function numPY(s) {
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
};

console.log(numPY("pPoopqwpejyuzxcyyyYP"));