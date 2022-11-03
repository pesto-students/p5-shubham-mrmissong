//Find town judge
const findJudge = (N, trust) => {
	let truster = {};
	let trustedUpon = {};
	for (let i = 1; i <= N; i++) {
		truster[i] = 0;
		trustedUpon[i] = 0;
	}
	for (let ele of trust) {
		truster[ele[0]]++;
		trustedUpon[ele[1]]++;
	}
	let judge = 0;
	for (key in truster) {
		if (truster[key] === 0) judge = key;
	}
	if (trustedUpon[judge] === N - 1) return judge;
	else return -1;
};
