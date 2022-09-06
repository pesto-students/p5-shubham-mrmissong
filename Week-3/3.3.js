//Exercise 3.3 Output problem
function createIncrement() {
    let count = 0;
    function increment() {
      count++;
    }
    let message=`Count is ${count}`;
    function log() {
      console.log(message);
    }
    return[increment,log];
  }
// let message;
//     function increment() {
//       count++;
//       message=`Count is ${count}`;
//     }
//     function log() {
//       console.log(message);
//     }
//     return[increment,log];
//   }
  const[increment,log] =createIncrement();
  increment();
  increment();
  increment();
  log();// => Count is 0

  //the output is "Count is 0". the increment changes the count but not the message. the commented code above shows the correction and the message is incremented with every execution.