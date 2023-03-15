import Word from "../interfaces/Word";

/**
 * Returns an array of Word objects containing the most common words in a sentence in descending order.
 * @param {string} sentence The sentence to count the occurences of words in.
 * @param {number} n The number of maximum array elements to return.
 * @returns {Word[]} An array of Word objects containing the most common words in a sentence in descending order.
 */
export default function countOccurences(sentence: string, n: number): Word[] {
  // If n is 0 or a negative number, early return an empty array
  if (n <= 0) return [];

  return (
    sentence

      .split(" ") // Split the sentence into an array of words using spaces as the separator

      .reduce((accumulator: Word[], word: string): Word[] => {
        // If word is an empty string, early return the current iteration
        if (!word) return accumulator;

        // If the word is already in the accumulator assign it to a new wordInAccumulator variable
        const wordInAccumulator: Word | undefined = accumulator.find((wordInAccumulator) => wordInAccumulator.word === word);

        /* If wordInAccumulator is not undefined (which means it is already in the building array), increment the count of the
         * word in the accumulator and early return the current iteration */
        if (wordInAccumulator) {
          wordInAccumulator.count++;
          return accumulator;
        }

        /* If wordInAccumulator is undefined, the if statement above was not executed so return the accumulator with the new word
         * with the initial count of 1 */
        return [...accumulator, { word, count: 1 }];
      }, []) // The starting value of the accumulator is an empty array

      .sort((firstWord: Word, secondWord: Word) => {
        if (firstWord.count !== secondWord.count) {
          return secondWord.count - firstWord.count; // sort by count descending
        }
        return firstWord.word.localeCompare(secondWord.word); // sort by alphabetical order if count is equal
      })

      // Slice the array to the first n elements only if n is less than the length of the array
      .slice(0, n)
  );
}
