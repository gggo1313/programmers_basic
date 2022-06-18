// ����Ʈ���� 1, 2, 3, 4, 5, 6, 7, 8, 9, *, 0, # �е带 ������ �迭 numbers
// �ּ� hand
// 1, 4, 7, *�� �޼�
// 3, 6, 9, #�� ������ 
// 2, 5, 8, 0�� �� ����� ��, �� �� �Ÿ��� ���ٸ� �ּ�
// �� ��ȣ�� ���� �ּ��� ���ӵ� ���ڿ� ���·� return
function solution (numbers, hand) {
    // �� ���� ���̸� ġȯ 1, 4, 7, * => 1, 2, 3
    // �� ���� ��������� ġȯ 1, 2, 3 => 1, 0, 1
    // �ʱⰪ ���� [����, ����]
    let right = [4, 1];
    let left = [4, 1];
    let answer = "";

    for (let i = 0; i < numbers.length; i++) {
        // �޼��ڸ� ���� ��
        if(numbers[i] % 3 === 1) {
            left = [(numbers[i] + 2) / 3, 1];
            answer += "L";
        };

        // �������ڸ� ���� ��
        if(numbers[i] % 3 === 0 && numbers[i] > 0) {
            right = [numbers[i] / 3, 1];
            answer += "R";
        };
        
        // ����ڸ� ���� ��
        if(numbers[i] % 3 === 2 || numbers[i] === 0) {
            let height = (numbers[i] + 1) / 3;

            // 0�� ��
            if (numbers[i] === 0) height = 4;

            // �հ����� �����¿�θ� �̵��� �� �����Ƿ� ����ź �Ÿ� ���
            // let l_distance = Math.pow((left[0] - height), 2) + Math.pow(left[1], 2);
            // let r_distance = Math.pow((right[0] - height), 2) + Math.pow(right[1], 2);
            let l_distance = Math.abs(left[0] - height) + left[1];
            let r_distance = Math.abs(right[0] - height) + right[1];

            if (l_distance > r_distance) {
                right = [height, 0];
                answer += "R";
            };
            if (l_distance < r_distance) {
                left = [height, 0];
                answer += "L";
            };
            if (l_distance === r_distance) {
                if(hand === "right") {
                    right = [height, 0];
                    answer += "R";
                } else {
                    left = [height, 0];
                    answer += "L";
                };
            };
        };
    };
    
    return answer;
};

let numbers1 = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let numbers2 = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// console.log(solution(numbers1, "right"));
console.log(solution(numbers2, "left"));
console.log(solution(numbers3, "right"));

// �ٸ� ��� Ǯ��
function Sol2(numbers, hand) {
    hand = hand[0] === "r" ? "R" : "L";

    let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]; // 0123456789 ����
    let h = { L: [1, 1], R: [1, 1]};

    return numbers.map(x => {
        // x�� 1, 4, 7 �߿� ������
        if (/[147]/.test(x)) {
            h.L = [position[x], 1];
            return "L";
        };
        // x�� 3, 6, 9 �߿� ������
        if (/[369]/.test(x)) {
            h.R = [position[x], 1];
            return "R"
        };

        // �������� ��� x�� 2, 5, 8, 0�̹Ƿ� ���� if�� ���� ����
        // �Ÿ� ���ϱ�
        let distL = Math.abs(position[x] - h.L[0]) + h.L[1];
        let distR = Math.abs(position[x] - h.R[0]) + h.R[1]; 

        if (distL === distR) {
            h[hand] = [position[x], 0];
            return hand;
        };
        if (distL < distR) {
            h.L = [position[x], 0];
            return "L";
        };
        // �� ��츦 ��� �������� ������ 
        h.R = [position[x], 0];
        return "R";
    }).join("")
};