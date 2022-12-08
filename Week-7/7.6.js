var stack1 = [];
var stack2 = [];

function enqueue(ele) {
	if (stack2.length > 0) {
		var len = stack2.length;
		for (var i = 0; i < len; i++) {
			var p = stack2.pop();
			stack1.push(p);
		}
	}
	stack1.push(ele);
}

function dequeue(ele) {
	if (stack2.length > 0) {
		stack2.pop();
	} else if (stack2.length === 0) {
		if (stack1.length === 0) {
			return "Queue is empty";
		} else if (stack1.length === 1) {
			return stack1.pop();
		} else if (stack1.length > 0) {
			var len = stack1.length;
			for (var i = 0; i < len; i++) {
				var p = stack1.pop();
				stack2.push(p);
			}
			return stack2.pop();
		}
	}
}
enqueue(1);
enqueue(2);
enqueue(3);
enqueue(4);
enqueue(5);
console.log(stack1);
console.log(stack2);
dequeue();
dequeue();
dequeue();

console.log(stack1);
console.log(stack2);
