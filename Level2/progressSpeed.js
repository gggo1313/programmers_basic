// �۾��� ���� ���൵ �迭 progresses
// �۾��� ���� �ӵ� �迭 speeds
// �� �������� �� ���� �۾��� �����Ǵ����� return
function solution (progresses, speeds) {
    const answer = [];

    let synthesisTasks = progresses.map((e, i) => {
        return [e, speeds[i]];
    });

    while (synthesisTasks.length > 0) {
        for (let i = 0; i < synthesisTasks.length; i++) {
            synthesisTasks[i][0] += synthesisTasks[i][1];
        };
        
        if (synthesisTasks[0][0] >= 100) {
            let count = 0;
            for (let j = 0; j < synthesisTasks.length; j++) {
                if (synthesisTasks[j][0] < 100) {
                    break;
                };
                if (synthesisTasks[j][0] >= 100) count++;
            };

            synthesisTasks = synthesisTasks.slice(count);
            answer.push(count);
        };
    };

    return answer;
};

let progresses1 = [94, 30, 55];
let speeds1 = [1, 30, 5];

let progresses2 = [95, 90, 99, 99, 80, 99];
let speeds2 = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses1, speeds1));
console.log(solution(progresses2, speeds2));

// �ٸ� ��� Ǯ��
function solution2 (progresses, speeds) {
    var answer = [];

    while(speeds.length > 0) {
        // ����
        for (let i in speeds) {
            if(progresses[i] < 100) {
                progresses[i] += speeds[i];
            };
        };

        // ����
        let deploy_count = 0;
        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            deploy_count++;
        };

        if (deploy_count > 0) {
            answer.push(deploy_count);
        }
    };

    return answer;
};

// ���� �Ϸ���� �ɸ��� �� ���� ���
function solution3 (progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progresses, index) => Math.ceil((100 - progresses) / speeds[index]));
    let maxDay = days[0];

    for (let i = 0, j = 0; i < days.length; i++) {
        if (days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;  // j ���� 1 ������          
        };
    };

    return answer;
};

console.log(solution3(progresses1, speeds1));
console.log(solution3(progresses2, speeds2));