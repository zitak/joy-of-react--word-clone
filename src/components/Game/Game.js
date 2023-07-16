import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import ResultBanner from '../ResultBanner/ResultBanner';
import { checkGuess } from '../../game-helpers';

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [results, setResults] = React.useState([]);

  const happyEnd =
    results[results.length - 1]
      ?.map((charResult) => charResult.letter)
      .join('') === answer;
  const sadEnd = !happyEnd && results.length >= NUM_OF_GUESSES_ALLOWED;

  const setGuess = (guessValue) => {
    setResults([...results, checkGuess(guessValue, answer)]);
  };

  return (
    <>
      <GuessResults results={results}></GuessResults>
      <GuessInput
        setGuess={setGuess}
        isEnd={happyEnd || sadEnd}
        results={results}
      ></GuessInput>
      <ResultBanner
        happyEnd={happyEnd}
        sadEnd={sadEnd}
        guessLength={results.length}
        answer={answer}
        onClick={() => {
          setAnswer(sample(WORDS));
          setResults([]);
        }}
      ></ResultBanner>
    </>
  );
}

export default Game;
