// K 칸을 점프하면 K만큼 건전지를 사용
// 현재까지 온 거리의 2배만큼의 위치로 순간이동 가능(건전지 사용X)
// N만큼 떨어진 거리에 가는 방법 중에서 최소 건전지 사용량을 return

function solution (n) {
    let count = 0;

    while (n > 0) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n--;
            count++;
        };
    };

    return count;
};

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));