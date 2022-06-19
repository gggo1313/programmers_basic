// 주어진 숫자열(numbers)의 숫자를 조합하여 만들 수 있는 소수의 개수를 return
function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });

  return result;
}

function solution (numbers) {
    let combination = [];
    let answer;

    for (let i = 1; i <= numbers.length; i++) {
        let arr = numbers.split('');
        let temp1 = permutation(arr, i).map(e => Number(e.join('')));
        let temp2 = Array.from(new Set(temp1));
        let temp3 = temp2.filter(e => e % 2 === 1);
        let temp4 = temp3.filter(e => e >= (10 ** (i - 1)));
        combination.push(...temp4);
    };

    if (combination[0] === 1) combination.shift();

    let max = Math.max(...combination);

    for (let j = 3; j <= Math.sqrt(Math.max(max)); j += 2) {
        // j의 배수를 모두 제거
        combination = combination.filter(e => e === j || e % j !== 0);
    };    

    answer = combination.length;
    console.log(combination);
    console.log(Math.sqrt(max));
    
    numbers.split('').includes('2') ? answer++ : answer;

    return answer;
};

console.log(solution("191675"));

