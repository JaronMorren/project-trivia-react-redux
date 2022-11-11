import React from 'react';
import { Link } from 'react-router-dom';

class ButtonRanking extends React.Component {
  render() {
    return (
      <Link to="/ranking">
        <button
          type="button"
          data-testid="btn-ranking"
        >
          Ranking
        </button>
      </Link>
    );
  }
}

export default ButtonRanking;
