import React from 'react';
import { NUM_OF_CHARS } from '../../constants';

function GuessInput({ setGuess, isEnd }) {
  const [guessValue, setGuessValue] = React.useState('');

  const submitGuessInput = (event) => {
    event.preventDefault();

    if (guessValue.length !== NUM_OF_CHARS) {
      return;
    }

    console.log('guessValue:', guessValue);
    setGuess(guessValue);
    setGuessValue('');
  };

  const changeGuessValue = (event) => {
    let value = event.target.value.toUpperCase();
    setGuessValue(value);
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
        onChange={changeGuessValue}
      />
    </form>
  );
}

export default GuessInput;
