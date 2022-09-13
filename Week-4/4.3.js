const Fibonacci = (num) => ({
    [Symbol.iterator]: () => {
        let old = 0;
        let i = 1;
        let current = 0;
        return {
            next: () => {
                if (i++ <= num) {
                    console.log(old + " " + "still false");
                    [old, current] = [current, (old + current) || 1];
                    return { value: old, done: false }
                }
                else {
                    console.log("true now");
                    return { done: true };
                }
            }
        }
    }
});
console.log([...Fibonacci(15)]);