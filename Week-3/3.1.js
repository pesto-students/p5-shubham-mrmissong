let total;
const addMarks = (...args) => {//use of arrow function
    return args.reduce(function (theory, practical) {
        total = theory + practical
        return total
    }, 0)
};

const memoize = (fun) => { //memoize function
    let cache = {}
    return function (...args) {
        let marks = args
        args.sort()
        if (marks in cache) {
            console.log("already in cache")
            return cache[marks];
        }
        else {
            console.log("added to cache")
            let result = addMarks(...args)
            cache[marks] = result
            return result;
        }
    }
}
const memoized = memoize(addMarks)
//time and timeEnd to analyze how fast the output is fetched the second time, i.e., from the cache
console.time()
console.log(memoized(40, 60))
console.timeEnd()

console.time()
console.log(memoized(40, 60))
console.timeEnd()

console.time()
console.log(memoized(30, 44))
console.timeEnd()

console.time()
console.log(memoized(44, 30))
console.timeEnd()