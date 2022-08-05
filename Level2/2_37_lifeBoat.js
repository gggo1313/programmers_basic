// 최대 2명씩 탈 수 있는 구명보트
// 구명보트에는 무게 제한 limit가 있음
// 사람들의 몸무게를 담은 배열 people
// 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최소값을 return
function solution (people, limit) {
    let count = 0;

    // people을 오름차순으로 정렬
    people.sort((a, b) => a - b);

    while (people.length) {
        const leng = people.length;

        // 그 누구와도 같이 탈 수 없으면 남은 인원 수를 count에 더함
        if (people[0] + people[1] > limit) {
            count += leng;
            break;
        }
        
        for (let i = leng - 1; leng > 1; i--) {  
            if (people[0] + people[i] <= limit) {
                // 맨 앞 index를 기준으로 맨 뒤에서부터 무게 합쳐서 
                // limit를 넘기지 않는 최대 무게값의 인덱스를 찾음
                // 쌍으로 제거하고 count + 1
                people.splice(i, 1);
                people.shift();
                count++;
                break;
            };
        };
    };

    return count;
};

let people1 = [70, 50, 80, 50];
let people2 = [70, 80, 50];

console.log(solution3(people1, 100));
console.log(solution3(people2, 100));

// 답은 맞았지만 효율성테스트 실패
// 맨 뒤에서 limit 넘겨서 넘어간 값들을 계속 중복해서 계산해주기 때문에 
// 누구랑도 limit 넘어가는 값은 바로 count하고 넘어가는 방법으로 변경
function solution2 (people, limit) {
    let count = 0;

    people.sort((a, b) => a - b);

    let front = 0;
    let back = people.length - 1;

    while (front < back) {
        // 누구랑도 limit 넘어가면 index 줄이고 count + 1
        if (people[front] + people[back] > limit) {
            back--;
        } else {
            // 같이 탈 수 있으면 앞뒤 인덱스 조정하고 count + 1
            back--;
            front++;
        };

        count++;
    };

    // 앞뒤 인덱스가 같아지면 같은 사람이므로 count + 1
    if (front === back) count++;

    return count;
};

// 다른 사람 풀이
// for문 조건에 j값을 추가하여 앞뒤를 한 번의 for문으로 계산
// 앞에서부터 같이 탄 사람의 수만 카운팅해서 답을 return
function solution3 (people, limit) {
    let count = 0;

    people.sort((a, b) => a - b);

    for (let i = 0, j = people.length - 1; i < j; j--) {
        if (people[i] + people[j] <= limit) {
            i++;
            count++;
        };
    };

    return people.length - count;
};