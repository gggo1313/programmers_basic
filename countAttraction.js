// 놀이기구를 N번 탈 때마다 요금은 N배로 늘어남
// 놀이기구 이용료(price), 소지금액(money), 타고 싶은 횟수(count)가 주어졌을 때
// 돈이 얼마 모자라는지를 return
// 부족하지 않으면 0을 return

function solution (price, money, count) {
    const total_price = price * count * (count + 1) / 2;

    return money > total_price ? 0 : total_price - money;
};

console.log(solution(3, 20, 4));