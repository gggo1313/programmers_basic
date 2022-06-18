// nums는 폰켓몬의 번호가 담긴 1차원 배열
// nums의 길이는 짝수인 자연수이며 전체 길이의 반까지 폰켓몬을 가져갈 수 있음
// 선택할 수 있는 폰켓몬 종류 개수의 최대값을 return

// 중복된 번호를 전부 제거
// nums.length/2와 유니크한 번호 개수를 비교
// nums.length/2가 크면 유니크한 번호개수를 최대값으로 return
// 유니크한 번호 개수가 많으면 nums.length/2를 최대값으로 return

function solution(nums) {
    const kindOfPhonketmon = Array.from(new Set(nums)).length;
    const numOfTake = nums.length / 2;

    return numOfTake < kindOfPhonketmon ? numOfTake : kindOfPhonketmon;
}

const arr1 = [3, 1, 2, 3];
const arr2 = [3, 3, 3, 2, 2, 4];
const arr3 = [3, 3, 3, 2, 2, 2];

console.log(solution(arr1));
console.log(solution(arr2));
console.log(solution(arr3));