function createStack() {
  let items = []; // declared item using let
  function push(item) {
    this.items.push(item);
  }

  function pop(item) {
    return this.items.pop();
  }

  return [push, pop];
}

const stack = createStack();

stack.push(10);
stack.push(5);
stack.pop();
stack.items;

console.log(stack.items); // => undefined
