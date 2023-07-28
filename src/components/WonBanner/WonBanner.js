import React from 'react';
import Banner from '../Banner/Banner';
import RestartButton from '../RestartButton/RestartButton';

function WonBanner({ guessLength, onClick }) {
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
      <RestartButton onClick={onClick}></RestartButton>
    </Banner>
  );
}

export default WonBanner;
