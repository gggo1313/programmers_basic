// ���ڿ� s�� ��Ÿ���� ���ڸ� ū �ͺ��� ���� ������ �����Ͽ� return
// �빮�ڴ� �ҹ��ں��� ���� ������ ����

function solution (s) {
    return s.split('').sort((a, b) => {
        if(a < b) return 1;
        if(a > b) return -1;
        if(a === b) return 0;
    }).join('');
};

console.log(solution("Zbcdefg"));

// �ٸ� ��� Ǯ��
// �������� �������� �ʰ� �������� ���� �� reverse

function solution2 (s) {
    return s
        .split('')
        .sort()
        .reverse()
        .join('');
};

console.log(solution2("auehrnWejXlpiM"));