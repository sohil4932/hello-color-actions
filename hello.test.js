const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from Sohil Patel to all my lovely Friends!");
  });
});
