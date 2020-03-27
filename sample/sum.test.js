const Sum = require("../Blackbox/sumBlackBox");

test("adds two integer numbers", () => {
  const result = Sum.sumBlackBox(2, 3);

  expect(result).toEqual(5);
});

test("add two floating numbers", () => {
  const result = Sum.sumBlackBox(1.3, 2.7);

  expect(result).toEqual(4.0);
});

test("fails when receive a string", () => {
  const result = Sum.sumBlackBox(5, "a");

  expect(result).toBeUndefined();
});
