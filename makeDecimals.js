const nums = [1, 2, 7, 6, 4];

function sum(array) {
    let array_length = array.length;
    let result = 0;
    var prev = 0;

    for(let i = 0; i < 3; i++) {
        
        while(next != prev) {
            var next = array[Math.floor(Math.random(0, array_length))];
            console.log("next: " + next);
        };

        result += array[Math.random(0, array_length)];

        var prev = next;
        console.log("prev: " + prev);
    };
    
    return result;
}
var a = Math.floor(Math.random(0, nums.length));
console.log(a);
console.log(nums[a]);
sum(nums);