import React from 'react';
import Banner from '../Banner/Banner';
import RestartButton from '../RestartButton/RestartButton';

function LostBanner({ answer, onClick }) {
  return (
    <Banner status={'sad'}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <RestartButton onClick={onClick}></RestartButton>
    </Banner>
  );
}

export default LostBanner;
