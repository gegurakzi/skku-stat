const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("sum([1, 2]) should be 3", () => {
    expect(lib.sum([1, 2])).toBe(3);
});
test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});
test("max([0, 3, 2]) should be 3", () => {
    expect(lib.max([0, 3, 2])).toBe(3);
});
test("min([3, -5, 0, 2]) should be -5", () => {
    expect(lib.min([3, -5, 0, 2])).toBe(-5);
});
test("med([5, 1, 2, 3, 3]) should be 3", () => {
    expect(lib.med([5, 1, 2, 3, 3])).toBe(3);
});
test("med([1, 2, 4, 4]) should be 3", () => {
    expect(lib.med([1, 2, 4, 4])).toBe(3);
});
test("sum([1@2, 3, 4]) should be 9", () => {
    expect(lib.sum([1, 1, 3, 4])).toBe(9);
});
test("sum([2@3, -2, 1@3]) should be 7", () => {
    expect(lib.sum([2, 2, 2, -2, 1, 1, 1])).toBe(7);
});
test("min([3@3, 5]) should be 3", () => {
    expect(lib.med([3, 3, 3, 5])).toBe(3);
});
test("med([2@4, 1, 4@2]) should be 2", () => {
    expect(lib.med([2, 2, 2, 2, 1, 4, 4])).toBe(2);
});