# Hello 😊

## This is my solution to the coding test for Foodles.

</br>

### Here is the exercice

```
1) Write a function that takes as input (sentence: String, n: Number)
and returns a list of size `n` where each element contains a word and and the frequency of that word in `sentence`
This list should be sorted by decreasing frequency and alphabetical order in case of tie.

Example:
Input: ("baz bar foo foo zblah zblah zblah baz toto bar", 3)
Output:
[
   ("zblah", 3),
   ("bar", 2),
   ("baz", 2),
]

2) Write tests for the function you just wrote

You are free to chose the programming language that you are the most comfortable with.
```

</br>

### Tools I used

I chose to use Vite, React and Typescript to solve this exercise.
</br>
The WordsOccurences.tsx file is a React component that is called in App.tsx.
</br>
WordsOccurences component calls the function countOccurences that I wrote to solve the problem.
</br>
The function countOccurences is located under utils/WordsOccurences.tsx, and the tests for this function are located under tests/WordsOccurences.test.tsx
</br>
I added a lot of comments on purpose to better explain the code inside the countOccurences function.
</br>
</br>

### How to use

To run the tests, you can use the following command :

```
npm run test
```

To run the program, you can use the following command :

```
npm run start
```

or

```
npm run dev
```
