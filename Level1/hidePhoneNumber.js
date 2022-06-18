// �ڵ��� ��ȣ ���ڿ�(phone_number)�� �־����� ��
// �� 4�ڸ��� ������ ������ ���ڸ� ���� *���� ���� ���ڿ��� return

// ���� �� ���� �����ϰ� splice
// �ڸ� ������ŭ * �߰�
function solution (phone_number) {
    const toBeHide = phone_number.length - 4;
    const arr = phone_number.split('');
    arr.splice(0, toBeHide);

    for(let i = 0; i < toBeHide; i++) {
        arr.unshift("*");
    }

    const answer = arr.join("");

    return answer;
}

const phone_number1 = "01033334444";
const phone_number2 = "027778888";

solution(phone_number1);
solution(phone_number2);

// ���Խ� Ǯ��
function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
}

console.log("Result: " + hide_numbers(phone_number1));
console.log("Result: " + hide_numbers(phone_number2));

// �ٸ� Ǯ�� - repeat�� �־���!
function hide_numbers2(s) {
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    
    return result;
}

console.log("Result: " + hide_numbers2(phone_number1));
console.log("Result: " + hide_numbers2(phone_number2));