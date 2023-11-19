import { splitSentence } from "./App";

describe("splitSentence", () => {
  it("splits a sentence into an ordered map of words", () => {
    expect(splitSentence("Hello").toJS()).toEqual({
      0: {
        cases: {},
        id: "0",
        value: "Hello"
      }
    });
  });
});
