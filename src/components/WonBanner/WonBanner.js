import React from 'react';
import Banner from '../Banner/Banner';
import RestartButton from '../RestartButton/RestartButton';

function WonBanner({ guessLength, handleRestart }) {
  return (
    <Banner status={'happy'}>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {' '}
          {`${guessLength} ${guessLength === 1 ? 'guess' : 'guesses'}`}
        </strong>
        .
      </p>
      {handleRestart && <RestartButton onClick={handleRestart}></RestartButton>}
    </Banner>
  );
}

export default WonBanner;
