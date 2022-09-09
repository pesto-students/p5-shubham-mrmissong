function createStack() {
  // Write your code here...
  let items = [];
  return {
    push: (item) => {
      items.push(item);
      console.log(item);
    },
    pop: () => {
      console.log(items.pop());
      return;
    }
  };
}
const stack = createStack();
stack.push(10); //10
stack.push(100); // 100
stack.push(1000); // 1000
stack.pop();

console.log(stack.items); // undefined