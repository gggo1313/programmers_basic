// 두 개의 자연수 n, m
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력

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

// 위와 같이 짰을 때 
// 입력값 5 3
// 기대값
// "*****
// *****
// *****
// "
// 실행 결과: 	Output size differs

// 아직 왜 그런지 모르겠음

// 아래의 경우에는 통과함
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

// 다른 사람 답변
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const row = '*'.repeat(a);
    for(let i = 0; i < b; i++) {
        console.log(row);
    }
});