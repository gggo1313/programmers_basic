// ������ ��� �ִ� �迭 arr�� ��հ��� return

function solution (arr) {
    let result = 0;
    arr.forEach(element => {
        result += element;
    })

    console.log(result / arr.length);
    return result / arr.length;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 5];

solution(arr1);
solution(arr2);

// �ٸ� ��� �亯
function average ( arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
};

const testArray = [5, 3, 4];
console.log("Average: " + average(testArray));