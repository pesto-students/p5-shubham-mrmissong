let arr = new Array(-2, 1, -3, 4, -1, 2, 1, -5, 4);
// let arr = new Array(1,2,-3,4,5)
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    let sum = arr[i] + arr[i - 1];
    if (sum > arr[i]) {
        arr[i] = sum;
    }
    max = Math.max(arr[i], max);
    console.log(arr) 
}
console.log(max)

// without Math.max
// let max= arr[0];

// for(let i=1; i<arr.length; i++){
//     let sum =arr[i]+arr[i-1];
//     if(sum>arr[i]) {
//         arr[i]=sum;
//     }
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log(max);

// //
// function maxSum(arr) {
//     let max = 0;
//     let sum = 0;
//     for (let i = 1; i < arr.length; i++) {
//         sum = arr[i] + sum;
//         if (arr[i] > sum) {
//             sum = arr[i];
//         }
//         if (sum > max) {
//             max = sum;
//         }
//     }
//     return max;
// }