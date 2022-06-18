// string array seoul의 elment 중 "Kim"의 위치 x를 찾아
// "김서방은 x에 있다"는 string을 return

function solution (seoul) {
    const x = seoul.findIndex((item) => {
        return item === "Kim";
    });

    return `김서방은 ${x}에 있다`
};

console.log(solution(["Jane", "Kim"]));


// 다른 사람 풀이
function findKim(seoul) {
    var idx = seoul.indexOf('Kim');
    return "김서방은 " + idx + "에 있다";
};