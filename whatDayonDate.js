// 2016�� 1�� 1���� �ݿ���
// 2016�� a�� b���� ���� �������� return
// return ���� SUN, MON, TUE, WED, THU, FRI, SAT �� return

function  solution (a, b) {
    const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const daysOfMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let days = 0;

    // �� ���
    for (let i = 0; i < a; i++) {
        days += daysOfMonth[i];
    };

    // �� ���
    days += b - 1;

    return day[days % 7];
};

console.log(solution(5, 24));

// �ٸ� ��� Ǯ��
// Date ���
function getDayName(a, b) {
    var arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var date = new Date(`2016-${a}-${b}`);
    var day = date.getDay();

    return arr[day];
};

console.log(getDayName(5, 25));

// reduce, slice
function getDayName2 (a, b) {
    const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var daySum;

    if(a < 2) {
        daySum = b - 1;
    } else {
        daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
    }

    return day[daySum % 7];
};

console.log(getDayName2(5, 26));