var levelOrder = function (root) {
	if (!root) {
		return [];
	}
	let q = [];
	let res = [];
	q.push(root);
	while (q.length) {
		let size = q.length;
		const temp = [];
		for (let i = 0; i < size; i++) {
			let node = q.shift();
			temp.push(node.value);
			if (node.left) {
				q.push(node.left);
			}
			if (node.right) {
				q.push(node.right);
			}
		}
		res.push(temp);
	}
	return res;
};
