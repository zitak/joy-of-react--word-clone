import React from 'react';

function ResultBanner({ happyEnd, sadEnd, guessLength, answer }) {
  if (happyEnd) {
    return <HappyBanner guessLength={guessLength}></HappyBanner>;
  }

  if (sadEnd) {
    return <SadBanner answer={answer}></SadBanner>;
  }

  return null;
}

export default ResultBanner;

function HappyBanner({ guessLength }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessLength} guesses</strong>.
      </p>
    </div>
  );
}

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}
