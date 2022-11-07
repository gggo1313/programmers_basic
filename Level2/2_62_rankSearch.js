// "언어 직군 경력 소울푸드 점수" 순으로 구성된 지원자 정보 문자열
// 지원자 정보 문자열로 이루어진 배열 info (<=50000)
// 찾고자 하는 조건 배열 query
// 각 조건에 해당하는 인원 수를 배열에 담아 return

function solution (info, query) {
    const answer = [];
    const employeeList = info.map((v) => v.split(" "));

    const queryList = query.map((v) => {
        return v.split(" ").filter((val) => {
           return val !== "and";
        });
    });

    for (let i = 0; i < queryList.length; i++) {
        let pass = [...employeeList];

        for (let j = 0; j < 4; j++) {
            if (queryList[i][j] !== "-") {
                pass = pass.filter((v) => {
                    return v[j] === queryList[i][j];
                });
            };
        };

        pass = pass.filter((v) => {
            return v[4] * 1 >= queryList[i][4] * 1;
        });

        answer.push(pass.length);
    };
    
    return answer;
};

const info1 = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"];
const query1 = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"];

console.log(solution(info1, query1));


// 효율성 검사 실패로 다시 작성
const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);
    
    while (left <= right) {
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;

        mid = Math.floor((left + right) / 2);
    };

    return mid + 1;
};

const getInfos = (info) => {
    const infos = {};

    info.forEach(infoString => {
        const arr = infoString.split(" ");
        const score = parseInt(arr.pop());
        const key = arr.join("");

        if (infos[key]) infos[key].push(score);
        else infos[key] = [score];
    });

    for (const key in infos) {
        infos[key].sort((a, b) => a - b);
    };

    return infos;
};

const getResult = (infos, query, score) => {
    const infosKey = Object.keys(infos);

    return infosKey
        .filter(key => query.every((v) => key.includes(v)))
        .reduce((acc, key) => acc + infos[key].length - binarySearch(infos[key], score), 0);
};

const solution2 = (info, query) => {
    let answer = [];
    const infos = getInfos(info);

    query
        .map((q) => q
            .split(/ and | |-/i) // ' and '와 ' '와 '-'으로 split
            .filter((v) => v !== "")
        )
        .forEach((query) => {
            const score = query.pop();
            const result = getResult(infos, query, score);
            answer.push(result)
        });
    
    return answer;
};

console.log(solution2(info1, query1));

// https://github.com/yuneg11/Programmers-Solutions/tree/master/solutions/72412%20-%20순위%20검색


