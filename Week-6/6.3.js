let arr = new Array(0, 2, 1, 2, 1, 0, 0, 0, 1, 1)

function sort(arr) {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
          done = false;
          let swap = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = swap;
        }
      }
    }
  
    return arr;
  }
  console.log(sort(arr))