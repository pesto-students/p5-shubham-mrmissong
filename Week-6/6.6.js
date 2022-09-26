//threeSum
let arr = new Array(-1, 2, 1, 4);

let closestSum = function(arr, target) {
    arr.sort((a, b) => a - b);
    let res = arr[0] + arr[1] + arr[2];
    for (let i = 0; i < arr.length - 2; i += 1) {
        let start = i + 1;
        let end = arr.length - 1;
        while (start < end) {
            const sum = arr[i] + arr[start] + arr[end];
            if (sum > target) {
                end -= 1;
            } else {
                start += 1;
            }
             if (Math.abs(target - sum) < Math.abs(target - res)) {
            res = sum;
        }
        }
    }
    return res;
};

console.log(closestSum(arr));