import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { checkGuess } from '../../game-helpers';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [results, setResults] = React.useState([]);
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState('running');

  const setGuess = (guessValue) => {
    const newResults = [...results, checkGuess(guessValue, answer)];
    setResults(newResults);

    // Check winning and losing the game
    if (guessValue === answer) {
      setGameStatus('won');
    } else if (newResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };

  const handleNewAnswer = () => {
    setGameStatus('running');
    setAnswer(sample(WORDS));
    setResults([]);
  };

  return (
    <>
      <GuessResults results={results}></GuessResults>
      <GuessInput
        setGuess={setGuess}
        results={results}
        disabled={gameStatus !== 'running'}
      ></GuessInput>
      {gameStatus === 'won' && (
        <WonBanner
          guessLength={results.length}
          handleRestart={handleNewAnswer}
        ></WonBanner>
      )}
      {gameStatus === 'lost' && (
        <LostBanner
          answer={answer}
          handleRestart={handleNewAnswer}
        ></LostBanner>
      )}
    </>
  );
}

export default Game;
