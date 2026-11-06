
const calculateSimpleInterest = require("./index");

test("Calculate simple interest correctly", () => {
    expect(calculateSimpleInterest(10000, 5, 2)).toBe(1000);
});

test("Calculate zero interest", () => {
    expect(calculateSimpleInterest(10000, 0, 2)).toBe(0);
});

test("Reject negative values", () => {
    expect(() => calculateSimpleInterest(-100, 5, 2))
        .toThrow("Values cannot be negative");
});
