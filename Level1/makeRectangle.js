// �� ���� �ڿ��� n, m
// ��(*) ���ڸ� �̿��� ������ ���̰� n, ������ ���̰� m�� ���簢�� ���¸� ���

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    console.log(a);
    console.log(b);

    let rectangle = ``;

    for(let i = 0; i < b; i++) {
        rectangle += "*".repeat(n);
        rectangle += '\n';
    }

    console.log(rectangle);
});

// ���� ���� ®�� �� 
// �Է°� 5 3
// ��밪
// "*****
// *****
// *****
// "
// ���� ���: 	Output size differs

// ���� �� �׷��� �𸣰���

// �Ʒ��� ��쿡�� �����
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    // console.log(a);
    // console.log(b);

    let stars = '';

    for(let i=0; i<b; i++) {
        for (let k=0; k<a; k++) {
            stars += '*'
        }
        stars += '\n'
    }
    console.log(stars)
});

// �ٸ� ��� �亯
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a);
    for(let i = 0; i < b; i++) {
        console.log(row);
    }
});