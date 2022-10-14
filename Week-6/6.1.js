function maxSum(arr) {
	let max = 0;
	let sum = 0;
	for (let i = 1; i < arr.length; i++) {
		sum = arr[i] + sum;
		if (arr[i] > sum) {
			sum = arr[i];
		}
		if (sum > max) {
			max = sum;
		}
	}
	return max;
}
console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
