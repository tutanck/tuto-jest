const sum = require("./sum");

const res = sum(1, 2);

test("adds 1 + 2 to equal 3", () => {
  expect(res).toBe(3);
});
