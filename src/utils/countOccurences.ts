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

  // Create a dictionary to store the words and their counts
  const wordsDictionary: { [key: string]: number } = {};

  // Split the sentence into an array of words and iterate over each word in the array to build the dictionary
  sentence.split(" ").forEach((word) => {
    // If word is an empty string, early return the current iteration
    if (!word) return;

    /* If the word is already in the dictionary, increment its count by 1
     * otherwise add it to the dictionary with an initial count of 1 */
    wordsDictionary[word] ? wordsDictionary[word]++ : (wordsDictionary[word] = 1);
  });

  return (
    Object.keys(wordsDictionary)

      // Build the final array of Word objects by collecting each entry from the dictionary
      .map((word) => {
        return { word, count: wordsDictionary[word] };
      })

      // Sort the array by count descending and then by alphabetical order if count is equal
      .sort((firstWord: Word, secondWord: Word) => {
        if (firstWord.count !== secondWord.count) {
          return secondWord.count - firstWord.count;
        }
        return firstWord.word.localeCompare(secondWord.word);
      })

      // Slice the array to the first n elements only if n is less than the length of the array
      .slice(0, n)
  );
}
