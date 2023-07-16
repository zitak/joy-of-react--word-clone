import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import ResultBanner from '../ResultBanner/ResultBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);

  const happyEnd = results[results.length - 1] === answer;
  const sadEnd = !happyEnd && results.length >= NUM_OF_GUESSES_ALLOWED;

  const setGuess = (guessValue) => {
    setResults([...results, guessValue]);
  };

  return (
    <>
      <GuessResults results={results} answer={answer}></GuessResults>
      <GuessInput setGuess={setGuess} isEnd={happyEnd || sadEnd}></GuessInput>
      <ResultBanner
        happyEnd={happyEnd}
        sadEnd={sadEnd}
        guessLength={results.length}
        answer={answer}
      ></ResultBanner>
    </>
  );
}

export default Game;
