// 문자열 s에 나타나는 문자를 큰 것부터 작은 순으로 정렬하여 return
// 대문자는 소문자보다 작은 것으로 간주

function solution (s) {
    return s.split('').sort((a, b) => {
        if(a < b) return 1;
        if(a > b) return -1;
        if(a === b) return 0;
    }).join('');
};

console.log(solution("Zbcdefg"));

// 다른 사람 풀이
// 내림차순 정렬하지 않고 오름차순 정렬 후 reverse

function solution2 (s) {
    return s
        .split('')
        .sort()
        .reverse()
        .join('');
};

console.log(solution2("auehrnWejXlpiM"));