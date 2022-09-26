const arr = [[1,2,3], [4,5,6], [7,8,9]]

let spiral = (arr) => {
    let top = 0;
    let left =0;
    let bottom =arr.length - 1;
    let right = arr[0].length -1;
    const res = [];
    const size = arr.length * arr[0].length;

    while(res.length<size) {
        for(let i =left; i<=right && res.length < size; i++){//left to right      
            res.push(arr[top][i]);
        }
        top++;
        for(i =top; i<= bottom && res.length <size; i++){ //top to bottom
            res.push(arr[i][right]);
        }
        right--;
        for(i =right; i>=left && res.length <size; i--){ //right to left
            res.push(arr[bottom][i]);
        }
        bottom--;
        for(i=bottom; i>=top && res.length < size; i--){ //bottom to top
            res.push(arr[i][left]);
        }
        left++;
    }
    return res;
};
console.log(spiral(arr))