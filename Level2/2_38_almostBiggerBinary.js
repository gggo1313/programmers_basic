// 2진수에서 숫자가 1~2개만 다르고 크기는 더 큰 가장 작은 수로 변환
// 정수들이 담긴 배열 numbers의 모든 수를 위와 같은 방법으로 변환하여 return
function solution (numbers) {
    // 각 원소를 2진수로 변환하고 뒤집은 배열로 만듦
    const answer = numbers.map((v => {
        // 짝수일 경우는 +1
        if (v % 2 === 0) {
            return v * 1 + 1;
        } else {
            const temp = v.toString(2).split("").reverse();
            
            for (let i = 0; i < temp.length; i++) {
                // 전부 1인 경우 맨 뒤를 0으로 바꾸고 1 추가
                if (
                    temp.reduce((acc, cur) => acc + cur * 1, 0) === temp.length
                ) {
                    temp[temp.length - 1] = 0;
                    temp.push(1);
                    break;
                } else if (temp[i] * 1 === 0 && i !== 0) {
                    // 앞 index부터 값이 0이면 +1하고 이전 index의 값을 0으로 변경
                    temp[i] = 1;
                    temp[i - 1] = 0;
                    break;
                } ;
            };

            // 다시 뒤집고 합쳐서 int 형으로 변경
            const re = parseInt(temp.reverse().join(""), 2)
            return re;
        };
    }));
    
    return answer;
};

console.log(solution([2, 7]));

// 다른 사람 풀이
// 최초로 0이 나타나는 인덱스를 쉽게 찾음
function solution2 (numbers) {
    let c;
    
    numbers.forEach(v => {
        // 1이나 2의 배수일 경우 1을 더해서 배열에 추가
        if (v < 2 || v % 2 === 0) {
            answer.push(v + 1);
        } else {
            let c = 2;
            while (true) {
                if ((v + 1) % (c * 2) === 0) {
                    c = c * 2;
                } else {
                    // 이 경우 이 c의 2의 차수가 최초로 0이 나타나는 자리
                    break;
                };
            };

            // c / 2는 최초로 0이 나타나기 직전의 자리의 1
            answer.push(v + (c / 2));
        };
    });

    return answer;
}