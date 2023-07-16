import React from 'react';

function ResultBanner({ happyEnd, sadEnd, guessLength, answer, onClick }) {
  if (happyEnd) {
    return (
      <HappyBanner guessLength={guessLength} onClick={onClick}></HappyBanner>
    );
  }

  if (sadEnd) {
    return <SadBanner answer={answer} onClick={onClick}></SadBanner>;
  }

  return null;
}

export default ResultBanner;

function HappyBanner({ guessLength, onClick }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessLength} guesses</strong>.
      </p>
      <RestartButton onClick={onClick}></RestartButton>
    </div>
  );
}

function SadBanner({ answer, onClick }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <RestartButton onClick={onClick}></RestartButton>
    </div>
  );
}

function RestartButton({ onClick }) {
  return (
    <button className="restart-button" onClick={onClick}>
      Restart Game
    </button>
  );
}
