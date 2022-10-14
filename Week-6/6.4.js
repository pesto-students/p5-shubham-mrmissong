//buy and sell stocks
let maxProfit = (prices) => {
	let profit = 0;
	let minimumPrice = prices[0];
	for (let i = 0; i < prices.length; i++) {
		let sp = prices[i];
		let gain = sp - minimumPrice;
		if (sp < minimumPrice) {
			minimumPrice = sp;
		}
		if (gain > profit) {
			profit = gain;
		}
	}
	return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
