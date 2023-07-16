import React from 'react';
import { KEYBOARD_ROWS } from '../../constants';
import { orderStatus } from '../../game-helpers';

function Keyboard({ results, disabled }) {
  return (
    <div className="keyboard">
      {KEYBOARD_ROWS.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((char) => {
            const charBestStatus = orderStatus(
              results
                .flat()
                .filter((result) => result.letter === char)
                .map((result) => result.status)
            );
            return (
              <span
                key={char}
                className={`keyboard-cell ${charBestStatus ?? ''}`}
                disabled={disabled}
              >
                {char}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
