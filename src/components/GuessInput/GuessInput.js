import React from 'react';

function GuessInput() {
  const [guessValue, setGuessValue] = React.useState('');

  const submitGuessInput = (event) => {
    event.preventDefault();
    console.log('guessValue:', guessValue);
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
        pattern={'[A-Za-z]{5}'}
        onChange={changeGuessValue}
      />
    </form>
  );
}

export default GuessInput;
