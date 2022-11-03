// All Path from source to target
var allPathsSourceTarget = function (graph) {
	let res = new Array();
	let recheck = (curr, currArr) => {
		currArr.push(curr);
		if (curr === graph.length - 1) {
			res.push([...currArr]);
		}
		let neighbours = graph[curr];
		for (let n of neighbours) {
			recheck(n, currArr);
		}
		currArr.pop();
	};
	recheck(0, []);
	return res;
};
