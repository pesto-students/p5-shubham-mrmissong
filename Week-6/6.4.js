let prices = new Array(7, 1, 5, 3, 6, 4, 106)
let max = 104;
let closest = 0;

for (let i = 0; i < prices.length < max; i++) {
    let base = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
        let current = prices[j];
        if (base > current) {
        } else {
            let diff = current - base;
            if (diff > closest) {
                closest = diff;
            }
        }
    }
}
console.log(closest);