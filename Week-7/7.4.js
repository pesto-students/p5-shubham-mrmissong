function peek(stack) {
	return stack[stack.length - 1];
}
function balanceCheck(s) {
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		//iterating
		let bracket = s.charAt(i);
		if (bracket === "(" || bracket === "{" || bracket === "[") {
			stack.push(bracket); //pushing open brackets
		} else if (bracket === ")" || bracket === "}" || bracket === "]") {
			if (stack.length === 0) {
				return false;
			} else if (
				peek(stack) === "(" || //checking matching brackets in the stack
				peek(stack) === "{" ||
				peek(stack) === "["
			) {
				stack.pop();
			} else {
				return false;
			}
		}
	}
	return stack.length === 0;
}

console.log(balanceCheck("(()"));
console.log(balanceCheck("()"));
console.log(balanceCheck("{()"));
console.log(balanceCheck("[{()}]"));
