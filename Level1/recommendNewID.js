// 신규 유저가 입력한 아이디 new_id
// 다음의 7단계 처리 과정으로 추천 아이디를 return
// 1. 대문자는 모두 소문자로
// 2. 알파벳, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
// 3. 마침표(.)가 2번 이상 연속되어 나타나면 하나의 마침표(.)로 치환
// 4. 마침표(.)가 처음이나 끝에 위치하면 제거
// 5. 빈 문자열이라면 new_id에 "a"를 대입
// 6. 16자 이상이면 앞의 15자를 제외한 나머지 문자들을 모두 제거
// 이 때, 마침표(.)가 맨 끝이라면 해당 마침표(.)를 제거
// 7. 2자 이하라면 마지막 글자를 3자가 될 때까지 반복
function solution (new_id) {
    let id_arr = new_id.split("");

    // 1. 대문자는 모두 소문자로 변환
    let filter1 = id_arr.map(e => e.toLowerCase());
    console.log("1: ", filter1);

    // 2. 알파벳, 숫자, -, _, . 를 제외한 모든 문자를 제거
    let filter2 = filter1.filter(e => {
        if (/[abcdefghijklmnopqrstuvwxyz0123456789]/.test(e)) return e;
        if (/[-_.]/.test(e)) return e;
    });
    console.log("2: ", filter2);

    // 3. 마침표가 2번 이상 연속되어 나타나면 하나의 마침표로 치환
    let filter3 = filter2.filter((e, i) => {
        if (e !== "." || filter2[i + 1] !== ".") {
            return e;
        };
    });
    console.log("3: ", filter3);

    // 4. 마침표가 처음이나 끝에 위치하면 제거
    let filter4 = filter3;

    if (filter4[0] === ".") filter4.shift();
    if (filter4[filter4.length - 1] === ".") filter4.pop();
    console.log("4: ", filter4);

    // 5. 빈 문자열이면 "a"를 대입
    let filter5 = filter4;
    if (filter5.length < 1) filter5.push("a");
    console.log("5: ", filter5);

    // 6. 16자 이상이면 15자 이후의 글자 삭제, 이 때 마지막 글자가 마침표이면 마침표 삭제
    let filter6 = filter5.slice(0, 15);
    if (filter6[14] === ".") {
        console.log(filter6)
        filter6.pop();
    };
    console.log("6: ", filter6);

    // 7. 2자 이하이면 3자가 될 때까지 마지막 글자를 반복 
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

// 다른 사람 풀이
// 단계별로 나누지 않고 필요한 공정부터 합쳐서 하는 방법
function solution2 (nid) {
    var abs = "";
    // 문자열의 모든 요소를 하나하나 확인해야 하는 과정
    for (let i = 0; i < nid.length; i++) {
        // 1번 과정
        let c = nid[i].toLowerCase();
        // 2번 과정
        if ("0123456789abcdefghijklmnopqrstuvwxyz.-_".indexOf(c) === -1) continue;
        // 3번 과정
        if (c === "." && ans[ans.length - 1] === "." && nid[i - 1]) continue;
        ans += c;
    }

    // 문자열에 대하여 처리하는 과정
    // 4번 과정
    if (ans[0] === ".") ans = ans.slice(1);
    // 6번 과정
    ans = ans.slice(0, 15);
    if (ans[ans.length - 1] === ".") ans = ans.slice(0, ans.length - 1);
    // 5번 과정
    if (!ans) ans = "a";
    // 7번 과정
    while (ans.length < 3) ans += ans[ans.length - 1];
    return ans;
};

