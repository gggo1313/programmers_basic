// 정수 배열 numbers가 주어짐
// numbers에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 
// 배열에 오름차순으로 담아 return
// 더한 결과가 중복인 경우 하나만 배열에 담음

// 인덱스가 다른 두 수를 뽑는다.
// 모든 경우의 수를 포함해야 한다.
// 더한 결과에서 중복된 값은 제거한다.
// 오름차순으로 정렬한다.

function solution (numbers) {
    let temp = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j]);
        }
    }

    const answer = Array.from(new Set(temp));
    answer.sort((a, b) => a - b);

    return answer;
}

const arr1 = [2, 1, 3, 4, 1];
const arr2 = [5, 0, 2, 7];

solution(arr1);
solution(arr2);