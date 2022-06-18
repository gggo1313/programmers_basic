// ���ڸ� ��� ���� �״�� �ۼ��� ���ڿ� s
// ���� ���ڸ� return
function solution (s) {    
    const answer = s.replace(/zero/g, 0)
                    .replace(/one/g, 1)
                    .replace(/two/g, 2)
                    .replace(/three/g, 3)
                    .replace(/four/g, 4)
                    .replace(/five/g, 5)
                    .replace(/six/g, 6)
                    .replace(/seven/g, 7)
                    .replace(/eight/g, 8)
                    .replace(/nine/g, 9)
    
    return Number(answer);
};

let s1 = "one4seveneight";
let s2 = "23four5six7";
let s3 = "2three45sixseven";
let s4 = "123";

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));

// �ٸ� ��� Ǯ��
// replace�� ���Խ��� ������� ����
function solution2 (s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for (let i = 0; i < numbers.length; i++) {
        // �ٲٰ��� �ϴ� ������ڸ� �������� �ڸ�
        let arr = answer.split(numbers[i]);
        // �߶��� �迭�� �ٲٷ��� ���ڷ� ����
        answer = arr.join(i);

    };

    return Number(answer);
};

console.log(solution2(s1));
console.log(solution2(s2));
console.log(solution2(s3));