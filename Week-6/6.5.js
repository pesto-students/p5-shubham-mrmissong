function pairDiff(arr, b){
    arr.sort((a,b)=> a-b);
    let i=0;
    let j= 1;
    while(i<arr.length && j<arr.length){
        if(arr[j]-arr[i] === b){
            return 1;
        }
        else if(arr[j]-arr[i] < b) {
            j++;
        }else {
            i++;
        }
    }
    return 0;
}
console.log(pairDiff([5, 10, 3, 2, 50, 80], 78))
console.log(pairDiff([5, 10, 3, 2, 50, 80], 53))

