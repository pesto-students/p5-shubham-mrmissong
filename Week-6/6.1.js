let arr = new Array(-2, 1, -3, 4, -1, 2, 1, -5, 4);
let max = arr[1];
for (let i = 1; i < arr.length; i++) {
    let sum = arr[i] + arr[i - 1];
    if (sum > arr[i]) {
        arr[i] = sum;
    }
    max = Math.max(arr[i], max);
}
console.log(max)