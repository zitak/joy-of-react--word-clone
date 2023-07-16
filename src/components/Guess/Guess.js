import React from 'react';
import { range } from '../../utils';
import { NUM_OF_CHARS } from '../../constants';

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(0, NUM_OF_CHARS).map((index) => (
        <span key={index} className="cell">
          {guess?.[index] ?? ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;
