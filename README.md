# Hello 😊 This is my solution to the coding test for Foodles.

## Notes

After rereading the code and the instruction with a clear head, I noticed that I forgot to code one of the features requested in the instruction which was:

<pre>
This list should be sorted by decreasing frequency <u><b>and alphabetical order in case of tie</b></u>.
</pre>

So I corrected this error, although the 1 hour delay had passed. I therefore consider that this correction is not part of the code returned in the allotted time and that this oversight is penalizing no matter what.
</br>
</br>
To browse the actual code that I returned in the allotted time, you can refer to [this commit (29b34e3) which is the last legitimate one](https://github.com/AdrienMasanet/foodles-first-coding-test/tree/29b34e3508e01852e6fc6e3c89786b7e4c709b5f), made within the time limit of one hour
</br>
</br>
Apart from this error, I also afterwards refactored and improved some details and added a test or two in the countOccurences.test.ts file.
</br>
</br>
Regardless of the outcome of this test, I would like to thank [Foodles](https://www.foodles.co/) for taking an interest in my application for the Junior Fullstack Developer position and giving me the opportunity to do this little challenge 😊 🧡
</br>
</br>

## Here is the exercice

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

## Tools I used

I chose to use [Vite](https://vitejs.dev/), [React](https://fr.reactjs.org/) and [Typescript](https://www.typescriptlang.org/) to solve this exercise and tests were written using [Vitest](https://vitest.dev/)
</br>
</br>

## How it works

The WordsOccurences.tsx file is a React component that is called in App.tsx. This React component shows the original sentence and the list of words computed by countOccurences() by displaying their string and their count.
</br>
</br>
WordsOccurences component calls the function countOccurences() that I wrote to solve the problem.
</br>
</br>
The function countOccurences is located under utils/WordsOccurences.tsx, and the tests for this function are located under tests/WordsOccurences.test.tsx
</br>
</br>
I added a lot of comments on purpose to better explain the code inside the countOccurences function.
</br>
</br>

## How to use

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
