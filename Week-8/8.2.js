//valid binary search tree
var isValidBST = function (root) {
	return dfs(root, -Infinity, Infinity);
};
function dfs(node, min, max) {
	if (!node) {
		return true;
	}
	if (node.val <= min || node.val >= max) {
		return false;
	}
	return dfs(node.left, min, node.value) && dfs(node.right, node.value, max);
}
