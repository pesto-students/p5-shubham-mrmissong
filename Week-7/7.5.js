let arr = new Array(1, 3, 2, 4);
let result = [];
function nGE(arr) {
	let stack = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		if (stack.length === 0) {
			result.push(-1);
			stack.push(arr[i]);
		} else if (arr[i] < stack[stack.length - 1]) {
			result.push(stack[stack.length - 1]);
			stack.push(arr[i]);
		} else {
			stack.pop();
			i = i + 1;
		}
	}
	return result.reverse();
}

console.log(nGE(arr));
