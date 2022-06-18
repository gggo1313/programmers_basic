// 어떤 문자열을 주어진 n만큼 밀어서 변화된 문자열을 return
// 소문자, 대문자 구분

function solution (s, n) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    let answer = ``;

    for (let i = 0; i < s.length; i++) {
        let text = s[i];
        console.log(text);
        if (text == ' ') {
            answer += ' ';
            continue;
        };

        let arr = upper.includes(text) ? upper : lower;
        let index = arr.indexOf(text) + n;
        if (index >= arr.length) index -= arr.length;

        answer += arr[index];
    };

    return answer;
};

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));

// 다른 사람 풀이

function caesar (s, n) {
    var result = "";

    var alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",
    " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",
    " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",
    " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",];

    var splitArray = s.split("");
    // indexOf로 배열에서 인덱스를 알아낸 후 인덱스에 n을 더한다.

    for (var i = 0; i < splitArray.length; i++) {
        var mn = alphabetArray.indexOf(splitArray[i]);
        splitArray[i] = alphabetArray[mn + n];

        result = result + "" + splitArray[i];
    }

    return result;
};

// upper, lower와 index > arr.length 경우를 모두 고려하여 한 번에 계산하는 방법
function solution2 (s, n) {
    var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY";
    return s.split('').map(e => chars[chars.indexOf(e) + n]).join('');
};

