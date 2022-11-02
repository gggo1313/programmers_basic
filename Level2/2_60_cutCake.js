// 토핑의 배열 topping 에는 토핑의 종류와 순서가 기록
// 잘랐을 때 양쪽의 토핑 종류가 같으면 공평
// 공평하게 자르는 경우의 수를 return
// function solution (topping) {
//     let count = 0;

//     const unique = arr => [...new Set(arr)];
//     const element = unique(topping);

//     for (let i = 0; i < topping.length; i++) {
//         const right = [...topping];
//         const left = right.splice(0, i + 1);        

//         // console.log("Left: ", left, "Right: ", right);

//         const numOfLeft = unique(left);
//         const numOfRight = unique(right);

//         if (numOfLeft.length === numOfRight.length) count++;
//     };

//     return count;
// };

function solution (topping) {
    const toppingNumber = new Map();
    topping.forEach((v) => {
        if (toppingNumber.has(v)) {
            const topp = toppingNumber.get(v);
            topp.duplicated++;  
            toppingNumber.set(v, topp);
        } else {
            toppingNumber.set(v, {duplicated: 1, visited: false});
        };   
    });

    let result = 0;
    let [left, right] = [0, toppingNumber.size];

    for (let i = 0; i < topping.length; i++) {
        const topp = toppingNumber.get(topping[i]);
        
        if (topp.duplicated >= 1) {
            topp.duplicated--;

            if (topp.duplicated == 0) right--;
        };

        if (!topp.visited) {
            topp.visited = true;
            left++;
        };

        toppingNumber.set(topping[i], topp);

        if (left === right) result++;
    };

    return result;
};


const topping1 = [1, 2, 1, 3, 1, 4, 1, 2];
const topping2 = [1, 2, 3, 1, 4];

// console.log(solution(topping1));
// console.log(solution(topping2));

const mapping = (topping) => {
    const elementNumber = new Map();
    console.log(elementNumber);
    topping.forEach((v) => {
        if (elementNumber.has(v)) {
            const val = elementNumber.get(v);
            val.duplicated++;
            elementNumber.set(v, val);
        } else {
            elementNumber.set(v, {duplicated: 1, visited: false});
        };
    });

    console.log(elementNumber);

};

console.log(mapping(topping1));