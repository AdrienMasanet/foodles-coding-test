import Word from "../interfaces/Word";

/**
 * Returns an array of Word objects containing the most common words in a sentence in descending order.
 * @param {string} sentence The sentence to count the occurences of words in.
 * @param {number} n The number of maximum array elements to return.
 * @returns {Word[]} An array of Word objects containing the most common words in a sentence in descending order.
 */
export default function countOccurences(sentence: string, n: number): Word[] {
  // If n is 0 or a negative number, return an empty array
  if (n <= 0) return [];

  // Here I split the sentence each time there is a space
  const wordsInSentence = sentence.split(" ");

  const outputWords: Word[] = [];

  /* For each word in the sentence, check if it is already in the outputWords array
   * If it is, increment the count of that word in the outputWords array
   * If it is not, add it to the outputWords array with a count of 1
   */
  wordsInSentence.forEach((word) => {
    if (word === "" || word === " ") return;

    const wordInOutputWords = outputWords.find((outputWord) => {
      return outputWord.word === word;
    });

    if (wordInOutputWords) {
      wordInOutputWords.count++;
    } else {
      outputWords.push({
        word,
        count: 1,
      });
    }
  });

  // Sort the outputWords array by count in descending order
  outputWords.sort((firstWord: Word, secondWord: Word) => {
    // If the counts are equal, sort by descending alphabetical order and do an early return
    if (firstWord.count === secondWord.count) {
      if (firstWord.word < secondWord.word) {
        return -1;
      } else if (firstWord.word > secondWord.word) {
        return 1;
      }
    }

    return secondWord.count - firstWord.count;
  });

  /* Keep only the first *n* words in the outputWords array by using splice().
   * I don't use an early return in the forEach loop above because I want to count
   * ALL the occurences and sort the array before trimming it.
   * I don't forget to not trim the array if n is greater than the length of the array !
   */
  if (n < outputWords.length) {
    outputWords.splice(n);
  }

  return outputWords;
}
