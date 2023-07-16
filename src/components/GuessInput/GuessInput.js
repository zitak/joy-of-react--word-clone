import React from 'react';
import { NUM_OF_CHARS } from '../../constants';
import Keyboard from '../Keyboard/Keyboard';

function GuessInput({ setGuess, isEnd, results }) {
  const [guessValue, setGuessValue] = React.useState('');

  const submitGuessInput = (event) => {
    event.preventDefault();

    if (guessValue.length !== NUM_OF_CHARS) {
      return;
    }

    setGuess(guessValue);
    setGuessValue('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={submitGuessInput}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guessValue}
        pattern={`[A-Za-z]{${NUM_OF_CHARS}}`}
        disabled={isEnd}
        onChange={(event) => {
          setGuessValue(event.target.value.toUpperCase());
        }}
      />
      <Keyboard results={results} disabled={isEnd}></Keyboard>
    </form>
  );
}

export default GuessInput;
