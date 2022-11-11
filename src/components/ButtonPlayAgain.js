import React from 'react';
import { Link } from 'react-router-dom';

class ButtonPlayAgain extends React.Component {
  render() {
    return (
      <Link to="/">
        <button
          type="button"
          data-testid="btn-play-again"
        >
          Play Again
        </button>
      </Link>
    );
  }
}

export default ButtonPlayAgain;
