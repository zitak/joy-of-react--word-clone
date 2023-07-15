import React from 'react';

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.map((guess) => (
        <p key={guess} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
