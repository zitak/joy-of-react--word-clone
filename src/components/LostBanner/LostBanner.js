import React from 'react';
import Banner from '../Banner/Banner';
import RestartButton from '../RestartButton/RestartButton';

function LostBanner({ answer, handleRestart }) {
  return (
    <Banner status={'sad'}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      {handleRestart && <RestartButton onClick={handleRestart}></RestartButton>}
    </Banner>
  );
}

export default LostBanner;
