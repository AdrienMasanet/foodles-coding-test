import countOccurences from "./countOccurences";
import Word from "../interfaces/Word";
import { describe, expect, it } from "vitest";

describe("Test countOccurences function", () => {
  it("should return an empty array if n is negative or equal to 0", () => {
    const result = countOccurences("foo bar baz", -1);
    expect(result.length).toBe(0);

    const result2 = countOccurences("foo bar baz", 0);
    expect(result2.length).toBe(0);
  });

  it("should return an array of length 0 if n is 0", () => {
    const result = countOccurences("foo bar baz", 0);
    expect(result.length).toBe(0);
  });

  it("should return an array of length 1 if n is 1 and there is only one word", () => {
    const result = countOccurences("foo foo foo foo foo", 1);
    expect(result.length).toBe(1);
  });

  it("should return an array of length 6 if n is 6 and there are 6 differents words", () => {
    const result = countOccurences("foo bar baz bat bay bas", 6);
    expect(result.length).toBe(6);
  });

  it("should return an array of words", () => {
    const result = countOccurences("foo foo foo foo bar baz baz baz bat bay bas bas", 3);
    expect(result).toEqual<Word[]>([
      { word: "foo", count: 4 },
      { word: "baz", count: 3 },
      { word: "bas", count: 2 },
    ]);
  });

  it("should return an array of words ordered by count in descending order", () => {
    const result = countOccurences("foo foo foo foo bar baz baz baz bat bay bas bas bat", 3);
    expect(result).toEqual<Word[]>([
      { word: "foo", count: 4 },
      { word: "baz", count: 3 },
      { word: "bat", count: 2 },
    ]);
  });
});
