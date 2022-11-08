// �� ���ڿ� str1�� str2�� �־���
// ��ī�� ���絵�� �� ���ڿ��� �������� ���������� ���� ����
// ���ڿ� �� �����ڴ� ���ӵ� �� ���� ���������� ���ҷ� ���� �� ����
// �� ���ڿ��� ��ī�� ���絵�� 65536�� ���ϰ� �����θ� return
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const extra = "~!@#$%^&*()_+=-/?|/\"\'\\1234567890,.<>;:"

const getMultipleSet = (str) => {
    const multipleSet = {};
    const arr = str.split("");
    let count = 0;

    arr.forEach((v, i) => {
        if (alphabet.includes(v) && alphabet.includes(arr[i + 1])) {
            const element = v + arr[i + 1];
            multipleSet[element] = (multipleSet[element] || 0) + 1;
            count++;
        };
    });

    return [multipleSet, count];
};

const getIntersection = (obj1, obj2, len1, len2) => {
    let count = 0;

    if (len1 < len2) {
        const target1 = Object.entries(obj1);
        const target2 = obj2;
        // console.log("1: ", target1);

        for (let i = 0; i < target1.length; i++) {
            // console.log(target1[i][0]);
            if (target2[target1[i][0]]) {
                while (Math.min(target2[target1[i][0]], target1[i][1]) > 0) {
                    target2[target1[i][0]]--;
                    target1[i][1]--;
                    count++;
                };
            };
        };
    } else {
        const target1 = Object.entries(obj2);
        const target2 = obj1;
        // console.log("2: ", target1);
        // console.log(obj1);

        for (let i = 0; i < target1.length; i++) {
            // console.log(target1[i][0])
            if (target2[target1[i][0]]) {
                while (Math.min(target2[target1[i][0]], target1[i][1]) > 0) {
                    target2[target1[i][0]]--;
                    target1[i][1]--;
                    count++;
                };
            };
        };
    };

    return count;
};

function solution (str1, str2) {
    const [lowStr1, lowStr2] = [str1.toLowerCase(), str2.toLowerCase()];

    const [set1, len1] = getMultipleSet(lowStr1); // str1�� ���� ���հ� ���Ұ��� 
    const [set2, len2] = getMultipleSet(lowStr2); // str2�� ���� ���հ� ���Ұ���

    if (len1 === 0 && len2 === 0) return 65536;

    // �� ���� ������ ������ ���� ����
    const intersection = getIntersection(set1, set2, len1, len2); 

    return Math.floor(intersection / (len1 + len2 - intersection) * 65536);
};

const str11 = "FRANCE";
const str12 = "french";
const str21 = "handshake";
const str22 = "shake hands";
const str31 = "aa1+aa2";
const str32 = "AAAA12";
const str41 = "E=M*C^2";
const str42 = "e=m*c^2";
const str51 = "+++--";
const str52 = "++---";


console.log(solution(str11, str12));
console.log(solution(str21, str22));
console.log(solution(str31, str32));
console.log(solution(str41, str42));

function solution2(str1, str2) {
    var answer = 0;
    let compare1 = verifiedSlices(str1), compare2 = verifiedSlices(str2)
    const union = new Set([...compare1, ...compare2])
    console.log(union);
    let multiIntersectionLen = 0, multiUnionLen = 0
    for (const slice of union) {
        const compare1Count = compare1.filter(x => x === slice).length,
            compare2Count = compare2.filter(x => x === slice).length
        multiIntersectionLen += Math.min(compare1Count, compare2Count)
        multiUnionLen += Math.max(compare1Count, compare2Count)
    }
    answer = multiUnionLen === 0 ? 65536 : Math.floor(multiIntersectionLen / multiUnionLen * 65536)
    return answer;
}


function verifiedSlices(str) {
    const onlyAlphabet = /[a-zA-Z]{2}/;
    let result = [];

    for (let i = 0; i < str.length - 1; i++) {
        const slice = str.slice(i, i + 2);
        if (onlyAlphabet.test(slice)) result.push(slice.toLowerCase());
    };
    return result;
};