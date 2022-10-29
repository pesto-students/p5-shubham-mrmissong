class Node {
	constructor(value) {
		this.date = value;
		this.left = null;
		this.right = null;
	}
}
function maxDepth(node) {
	if (node == null) return 0;
	else {
		let lDepth = maxDepth(node.left);
		let rDepth = maxDepth(node.right);

		if (lDepth > rDepth) return lDepth + 1;
		else return rDepth + 1;
	}
}
const root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(maxDepth(root));
