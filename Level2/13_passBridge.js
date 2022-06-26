// 1�ʿ� 1��ŭ �ǳ� �� �ִ� �ٸ�
// �ٸ����� bridge_length�� �ٸ��� �ߵ� �� �ִ� ���� weight
// �ǳʷ��� Ʈ���� ������ ���԰� ���� �ִ� truck_weights
// ��� Ʈ���� �ٸ��� �ǳʴ� ���� �ɸ��� �ð��� return
function solution (bridge_length, weight, truck_weights) {
    if (truck_weights.length === 0) return 0;

    let count = 0;
    let sum = 0;
    const state = new Array(bridge_length).fill(0);

    let now_truck = truck_weights.shift();

    state.unshift(now_truck);
    state.pop();

    sum += now_truck;
    count++;

    while (sum) {
        sum -= state.pop();
        now_truck = truck_weights.shift();

        if (sum + now_truck > weight) {
            truck_weights.unshift(now_truck);
            state.unshift(0);
        } else if (now_truck) {
            state.unshift(now_truck);
            sum += now_truck;
        } else {
            state.unshift(0);
        };

        count++;
    };

    return count;
};

let tw1 = [7, 4, 5, 6];
let tw2 = [10];
let tw3 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

console.log(solution2(2, 10, tw1));
// console.log(solution(100, 100, tw2));
// console.log(solution(100, 100, tw3));

// �ٸ� ��� Ǯ��
// ���� Ʈ���� ���ö���� ��Ȳ�̸� �ö�� ��Ȳ�� �� ������ �ð��� ������
function solution2 (bridge_length, weight, truck_weights) {
    // '�ٸ�'�� ����� ť�� ������ �迭�� ���� : [Ʈ������, �갡 ���� �ð�]
    let time = 0, qu = [[0, 0]], weightOnBridge = 0;

    // ��� Ʈ��, �ٸ��� �ǳʴ� Ʈ���� ��� 0�� ������ ���� ���� �ݺ�
    while (qu.length > 0 || truck_weights.length > 0) {
        // 1. ���� �ð��� ť �� ���� ���� '���� �ð�'�� ���ٸ� �������ְ�,
        //    �ٸ� �� Ʈ�� ���� �տ��� ���ش�.
        if (qu[0][1] === time) {
            weightOnBridge -= qu.shift()[0];
            console.log("1")
        };

        if (weightOnBridge + truck_weights[0] <= weight) {
            // 2. �ٸ� �� Ʈ�� ���� �� + ���� ���� Ʈ���� ù ���԰� ���� ���� ���ϸ�
            //    �ٸ� �� Ʈ�� ���� ������Ʈ, ť �ڿ� [Ʈ������, �� Ʈ���� ���� �ð�] �߰�
            weightOnBridge += truck_weights[0];
            qu.push([truck_weights.shift(), time + bridge_length]);
            console.log("2")
        } else {
            // 3. ���� Ʈ���� ���ö���� ��Ȳ�̸� �� ť��
            //    ù ��° Ʈ���� �������� �� �ð����� �����Ѵ�.
            //    ����: if �ۿ��� 1 ���ϱ� ������ -1 ����
            if (qu[0]) time = qu[0][1] - 1;
            console.log("3")
        };
        // �ð� ������Ʈ ���ش�.
        time++;
        console.log("que: ", qu, "time: ", time);
    };

    return time;
};

