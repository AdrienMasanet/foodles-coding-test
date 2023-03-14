import { useState } from "react";
import Word from "../../interfaces/Word";
import countOccurences from "../../utils/countOccurences";

type MyComponentProps = {
  initialSentence: string;
  listMaxLength: number;
};

const MyComponent = ({ initialSentence, listMaxLength }: MyComponentProps) => {
  const [outputList, setOutputList] = useState<Word[]>(countOccurences(initialSentence, listMaxLength));

  return (
    <div>
      <h1>Count words occurences in sentence</h1>
      <p>The sentence was : {initialSentence}</p>
      <p>
        The output is :
        <ul>
          {outputList.map((word, index) => (
            <li key={index}>
              {word.word} appears {word.count} times
            </li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default MyComponent;
