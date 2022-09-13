const Fibonacci = (num) => ({
    [Symbol.iterator]: () => {
        // [Symbol.iterator] adds the iterator method
        let old = 0;
        let current = 0;
        let i = 1;
        return {
            // a method called 'next' is being returned which further returns an object with value and done status
            // the iteration stops when the done is true
            next: () => {
                if (i++ <= num) {
                    console.log(old + " " + "still false");
                    // For instance, if the old is 34 and current is 55,
                    // [34,55] = [55,89],
                    // old is represented by current, and
                    // current is represented by (old + current)
                    // the 34 and 55 add up to 89 and further update the values in both old and current.
                    [old, current] = [current, (old + current) || 1];
                    return { value: old, done: false }
                }
                else {
                    console.log(old + " " + "true now");
                    return { done: true };
                }
            }
        }
    }
});

console.log([...Fibonacci(14)]);