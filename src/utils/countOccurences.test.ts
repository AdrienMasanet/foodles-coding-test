import countOccurences from "./countOccurences";
import Word from "../interfaces/Word";
import { describe, expect, expectTypeOf, it } from "vitest";

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
    expectTypeOf(result).toEqualTypeOf<Word[]>();
  });

  it("should return an array of words ordered by count in descending order", () => {
    const result = countOccurences("foo foo foo foo bar baz baz baz bat bay bas bat", 3);
    expect(result).toEqual<Word[]>([
      { word: "foo", count: 4 },
      { word: "baz", count: 3 },
      { word: "bat", count: 2 },
    ]);
  });

  it("should return an array of words ordered by count in descending order and then by alphabetical order if count is equal between two words", () => {
    const result = countOccurences("foo foo foo foo bar baz bay bas bat bat bat bat", 4);
    expect(result).toEqual<Word[]>([
      { word: "bat", count: 4 },
      { word: "foo", count: 4 },
      { word: "bar", count: 1 },
      { word: "bas", count: 1 },
    ]);
  });

  it("should return an array of words that is *n* length if *n* > length of array", () => {
    const result = countOccurences("foo foo foo foo baz baz baz bas bas bas bas bas bat bae bae bay bay bay bau baf", 3);
    expect(result.length).toBe(3);
  });

  it("should return an array of words that never contains an empty character", () => {
    const result = countOccurences("foo foo foo foo foo bar bar  ", 2);
    expect(result).toEqual<Word[]>([
      { word: "foo", count: 5 },
      { word: "bar", count: 2 },
    ]);
  });
});
