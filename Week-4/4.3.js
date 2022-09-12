const Fib = {
    [Symbol.iterator]: function (num) {
        let before = 0;
        let actual = 1;
        let next = 1;
        return {
            next: () => {
                for (let i = 0; i < num; i++) {
                    console.log(next)
                    before = actual + next
                    actual = next
                    next = before
                }
            }
        }
    }
}
console.log([...Fib])