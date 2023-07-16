import React from 'react';
import { range } from '../../utils';
import { NUM_OF_CHARS } from '../../constants';

function Guess({ guessResult }) {
  return (
    <p className="guess">
      {range(0, NUM_OF_CHARS).map((index) => (
        <span
          key={index}
          className={`cell ${guessResult?.[index]?.status ?? ''}`}
        >
          {guessResult?.[index]?.letter ?? ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;
