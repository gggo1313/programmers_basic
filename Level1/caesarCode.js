// � ���ڿ��� �־��� n��ŭ �о ��ȭ�� ���ڿ��� return
// �ҹ���, �빮�� ����

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

// �ٸ� ��� Ǯ��

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
    // indexOf�� �迭���� �ε����� �˾Ƴ� �� �ε����� n�� ���Ѵ�.

    for (var i = 0; i < splitArray.length; i++) {
        var mn = alphabetArray.indexOf(splitArray[i]);
        splitArray[i] = alphabetArray[mn + n];

        result = result + "" + splitArray[i];
    }

    return result;
};

// upper, lower�� index > arr.length ��츦 ��� ����Ͽ� �� ���� ����ϴ� ���
function solution2 (s, n) {
    var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY";
    return s.split('').map(e => chars[chars.indexOf(e) + n]).join('');
};

