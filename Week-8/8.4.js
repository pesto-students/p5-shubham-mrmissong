var validPath = function (n, edges, source, destination) {
	let adjL = {};
	let visited = [];
	for (let edge of edges) {
		adjL[edge[0]] ? adjL[edge[0]].push(edge[1]) : (adjL[edge[0]] = [edge[1]]);
		adjL[edge[1]] ? adjL[edge[1]].push(edge[0]) : (adjL[edge[1]] = [edge[0]]);
	}
	let stack = [source];
	visited[source] = true;
	while (stack.length) {
		let current = stack.pop();
		if (current === destination) return true;
		for (let neighbour of adjL[current]) {
			if (!visited[neighbour]) {
				stack.push(neighbour);
				visited[neighbour] = true;
			}
		}
	}
	return false;
};
