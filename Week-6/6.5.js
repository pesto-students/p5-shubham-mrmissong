// function pairSum(array, sumCheck) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (Math.abs(array[i] - array[j]) === Math.abs(sumCheck)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// console.log(pairSum([5, 10, 3, 2, 50, 80], 78))
// console.log(pairSum([5, 10, 3, 2, 50, 80], 53))


const pairDiff = (arr, b) => {
    const set = new Set(arr);
    for (let i = 0; i < arr.length; i++) {
        if (set.has(b + arr[i])) {
            return 1;
        }
    } return 0;
}
console.log(pairDiff([5, 10, 3, 2, 50, 80], 78))
console.log(pairDiff([5, 10, 3, 2, 50, 80], 53))