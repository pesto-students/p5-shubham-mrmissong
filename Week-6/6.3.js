let arr = new Array(0, 2, 1, 2, 1, 0, 0, 0, 1, 1)

// console.log(arr.sort());

arr.sort(function (a, b) {
    return a - b;
});
console.log(arr)