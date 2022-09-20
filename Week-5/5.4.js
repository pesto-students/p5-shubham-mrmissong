const { expect } = require("expect");
const { test } = require("picomatch");

const mathOp = {
    sum: (a, b) => {
        return a + b;
    },
    sub: (a, b) => {
        return a - b;
    },
    mul: (a, b) => {
        return a * b;
    },
    div: (a, b) => {
        return a / b;
    }
}

test('Adding 4 and 5 should return 9', () => {
    let result = mathOp.sum(4, 5)
    expect(result).toBe(9);
})