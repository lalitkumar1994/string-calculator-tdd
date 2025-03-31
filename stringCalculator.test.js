const add = require("./stringCalculator");

test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
});

test("returns number itself for a single number", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
});

test("returns sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
});

test("handles multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
});

test("handles new line as a separator", () => {
    expect(add("1\n2,3")).toBe(6);
});

test("handles custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
});

test("throws exception for negative numbers", () => {
    expect(() => add("1,-2,-3")).toThrow("Negatives not allowed: -2, -3");
});

test("ignores numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
});