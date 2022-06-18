// 놀이기구를 N번 탈 때마다 요금은 N배로 늘어남
// 놀이기구 이용료(price), 소지금액(money), 타고 싶은 횟수(count)가 주어졌을 때
// 돈이 얼마 모자라는지를 return
// 부족하지 않으면 0을 return

function solution (price, money, count) {
    const total_price = price * count * (count + 1) / 2;

    return money > total_price ? 0 : total_price - money;
};

console.log(solution(3, 20, 4));

// 다른 사람 풀이
// 정규식
const solution = (..._) => Math.max(_[0] * _[2] * ++_[2] / 2 - _[1], 0);
// (..._) : solution 함수에 들어오는 매개변수의 목록
// _[0] 매개변수 목록의 배열에서 index 0번째
// ++_[2] 는 _[2]에 대해 먼저 +1 하고 계산
// Math.max(total_price - money, 0)으로 삼항 연산을 최대값 고르는 방법으로 대체
