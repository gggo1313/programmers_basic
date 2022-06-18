// ���� �迭 nums���� ���� �ٸ� 3���� �̾� ������ �� �Ҽ��� �Ǵ� ����� ���� return

function solution (nums) {
    let sum = [];

    // ���� ����� Ȧ���̰� �ߺ��� ���� ������ sum �迭�� �߰�
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let temp = nums[i] + nums[j] + nums[k];
                if (!sum.includes[temp] && temp % 2 === 1) sum.push(temp);
            };
        };
    };

    // ũ�� ������ �����Ͽ� �ִ밪 ����
    sum.sort((a, b) => a - b);

    // 3���� �ִ밪�� ������ ������ Ȧ�������� ��� ����� sum �迭���� ����
    for (let i = 3; i <= Math.sqrt(sum[sum.length - 1]); i += 2) {
        for (let j = i * 2; j <= sum[sum.length - 1]; j += i) {
            sum = sum.filter(e => e !== j);
        };
    };

    return sum.length;
};

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
