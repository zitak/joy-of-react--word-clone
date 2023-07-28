import React from 'react';

function RestartButton({ onClick }) {
  return (
    <button className="restart-button" onClick={onClick}>
      Restart Game
    </button>
  );
}

export default RestartButton;
