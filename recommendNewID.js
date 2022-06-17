// �ű� ������ �Է��� ���̵� new_id
// ������ 7�ܰ� ó�� �������� ��õ ���̵� return
// 1. �빮�ڴ� ��� �ҹ��ڷ�
// 2. ���ĺ�, ����, ����(-), ����(_), ��ħǥ(.)�� ������ ��� ���ڸ� ����
// 3. ��ħǥ(.)�� 2�� �̻� ���ӵǾ� ��Ÿ���� �ϳ��� ��ħǥ(.)�� ġȯ
// 4. ��ħǥ(.)�� ó���̳� ���� ��ġ�ϸ� ����
// 5. �� ���ڿ��̶�� new_id�� "a"�� ����
// 6. 16�� �̻��̸� ���� 15�ڸ� ������ ������ ���ڵ��� ��� ����
// �� ��, ��ħǥ(.)�� �� ���̶�� �ش� ��ħǥ(.)�� ����
// 7. 2�� ���϶�� ������ ���ڸ� 3�ڰ� �� ������ �ݺ�
function solution (new_id) {
    let id_arr = new_id.split("");

    // 1. �빮�ڴ� ��� �ҹ��ڷ� ��ȯ
    let filter1 = id_arr.map(e => e.toLowerCase());
    console.log("1: ", filter1);

    // 2. ���ĺ�, ����, -, _, . �� ������ ��� ���ڸ� ����
    let filter2 = filter1.filter(e => {
        if (/[abcdefghijklmnopqrstuvwxyz0123456789]/.test(e)) return e;
        if (/[-_.]/.test(e)) return e;
    });
    console.log("2: ", filter2);

    // 3. ��ħǥ�� 2�� �̻� ���ӵǾ� ��Ÿ���� �ϳ��� ��ħǥ�� ġȯ
    let filter3 = filter2.filter((e, i) => {
        if (e !== "." || filter2[i + 1] !== ".") {
            return e;
        };
    });
    console.log("3: ", filter3);

    // 4. ��ħǥ�� ó���̳� ���� ��ġ�ϸ� ����
    let filter4 = filter3;

    if (filter4[0] === ".") filter4.shift();
    if (filter4[filter4.length - 1] === ".") filter4.pop();
    console.log("4: ", filter4);

    // 5. �� ���ڿ��̸� "a"�� ����
    let filter5 = filter4;
    if (filter5.length < 1) filter5.push("a");
    console.log("5: ", filter5);

    // 6. 16�� �̻��̸� 15�� ������ ���� ����, �� �� ������ ���ڰ� ��ħǥ�̸� ��ħǥ ����
    let filter6 = filter5.slice(0, 15);
    if (filter6[14] === ".") {
        console.log(filter6)
        filter6.pop();
    };
    console.log("6: ", filter6);

    // 7. 2�� �����̸� 3�ڰ� �� ������ ������ ���ڸ� �ݺ� 
    let filter7 = filter6;
    if (filter7.length < 3) {
        while (filter7.length < 3) filter7.push(filter7[filter7.length - 1]);
    };
    console.log("7: ", filter7);

    return filter7.join('');
};

let id1 = "...!@BaT#*..y.Abcdefghijklm";
let id2 = "z-+.^.";
let id3 = "=.=";
let id4 = "123_.def";
let id5 = "abcdefghijklmn.p";

console.log(solution(id1));

// �ٸ� ��� Ǯ��
// �ܰ躰�� ������ �ʰ� �ʿ��� �������� ���ļ� �ϴ� ���
function solution2 (nid) {
    var abs = "";
    // ���ڿ��� ��� ��Ҹ� �ϳ��ϳ� Ȯ���ؾ� �ϴ� ����
    for (let i = 0; i < nid.length; i++) {
        // 1�� ����
        let c = nid[i].toLowerCase();
        // 2�� ����
        if ("0123456789abcdefghijklmnopqrstuvwxyz.-_".indexOf(c) === -1) continue;
        // 3�� ����
        if (c === "." && ans[ans.length - 1] === "." && nid[i - 1]) continue;
        ans += c;
    }

    // ���ڿ��� ���Ͽ� ó���ϴ� ����
    // 4�� ����
    if (ans[0] === ".") ans = ans.slice(1);
    // 6�� ����
    ans = ans.slice(0, 15);
    if (ans[ans.length - 1] === ".") ans = ans.slice(0, ans.length - 1);
    // 5�� ����
    if (!ans) ans = "a";
    // 7�� ����
    while (ans.length < 3) ans += ans[ans.length - 1];
    return ans;
};

