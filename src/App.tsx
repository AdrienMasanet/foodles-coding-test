import WordsOccurences from "./components/WordsOccurences/WordsOccurences";

function App() {
  return (
    <div>
      <WordsOccurences initialSentence="baz bar foo foo zblah zblah zblah baz toto bar" listMaxLength={3} />
    </div>
  );
}

export default App;
