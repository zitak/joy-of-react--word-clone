import React from 'react';
import { range } from '../../utils';
import { NUM_OF_CHARS } from '../../constants';

function Guess({ guessResult }) {
  return (
    <p className="guess">
      {range(NUM_OF_CHARS).map((index) => {
        const guess = guessResult?.[index];

        return (
          <span key={index} className={`cell ${guess?.status ?? ''}`}>
            {guess?.letter ?? ''}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
