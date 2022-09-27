let prices = new Array(7, 1, 5, 3, 6, 4)
let profit = 0;

for (let i = 0; i < prices.length; i++) {
    let base = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
        let current = prices[j];
        if (base > current) {
            console.log("loss")
        } else {
            let diff = current - base;
            if (diff > profit) {
                profit = diff;
            }
        }
    }
}
console.log(profit);