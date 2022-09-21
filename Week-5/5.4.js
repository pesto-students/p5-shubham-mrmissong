// Exercise 5.4
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

test('Adding 6 and 2 should return 8', () => {
    let result = mathOp.sum(6, 2)
    expect(result).toBe(8);
});

test('Subtracting 6 and 2 should return 4', () => {
    let result = mathOp.sub(6, 2)
    expect(result).toBe(4);
});

test('Multiplying 6 and 2 should return 12', () => {
    let result = mathOp.mul(6, 2)
    expect(result).toBe(12);
});

test('Dividing 6 and 2 should return 3', () => {
    let result = mathOp.div(6, 2)
    expect(result).toBe(3);
});