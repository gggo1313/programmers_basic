// 지도는 한 변의 길이가 n인 정사각형 배열
// 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류
// 전체 지도는 두 장의 지도를 겹쳤을 때 둘 다 공백이면 공백 아니라면 벽
// "지도 1"과 "지도 2"는 공백을 0, 벽을 1로 표현한 2진수의 10진수로 되어 있음
// n, 지도 1(arr1), 지도 2(arr2)가 주어졌을 때 해독하여 
// "#"과 " "로 구성된 문자열 배열을 return

function solution (n, arr1, arr2) {
    // arr1과 arr2를 2진수로 변환
    const arr1_to2 = arr1.map(e => e.toString(2));
    const arr2_to2 = arr2.map(e => e.toString(2));

    // 자리수 맞춰주기
    for (let i = 0; i < n; i++) {
        // arr1_to2
        if(arr1_to2[i].length !== n) {
            while(arr1_to2[i].length !== n) arr1_to2[i] = '0' + arr1_to2[i];
        };
        // arr2_to2
        if(arr2_to2[i].length !== n) {
            while(arr2_to2[i].length !== n) arr2_to2[i] = '0' + arr2_to2[i];
        };
    };

    const answer = [];

    for (let i = 0; i < n; i++) {
        let temp =[];

        for (let j = 0; j < n; j++) {
            if (arr1_to2[i][j] === '0' && arr2_to2[i][j] === '0') {
                temp.push(" ");
            } else {
                temp.push("#");
            };
        };

        answer.push(temp.join(''));
    };

    return answer;
};

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));

// 다른 사람 풀이
// 정규식 사용
// single vertical bar
// 두 수를 2진수로 변환해서 비교해서 
// 같은 자리에 둘 다 0이면 0
// 하나는 자리수가 존재하고 다른 하나는 자리수가 없으면 존재하는 쪽의 수
// 둘 다 0이 아니라면 1을 반환
// 19|17 = 19
// 16|7 = 23
function solution2 (n, arr1, arr2) {
    var answer = [];
    let c;

    for (let i = 0; i < n; i++) {
        c = (arr1[i]|arr2[i]).toString(2).replace(/1/g, "#").replace(/0/g, " ");

        while(c.length != n) {
            c = " " + c;
        };

        answer.push(c);
    };

    return answer;
};

console.log(17|19);