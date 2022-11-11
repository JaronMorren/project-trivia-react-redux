import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// https://github.com/chrisblakely01/quiz-app/blob/master/final/src/App.js

class Feedback extends React.Component {
  render() {
    const { playerScore } = this.props;
    const minimumScore = 3;
    console.log(playerScore);

    if (playerScore < minimumScore) {
      return <h1 data-testid="feedback-text">Could be better...</h1>;
    }

    if (playerScore >= minimumScore) {
      return <h1 data-testid="feedback-text">Well Done!</h1>;
    }
  }
}
Feedback.propTypes = {
  playerScore: PropTypes.number.isRequired,
};

const mapStateToProps = (globalState) => ({
  playerScore: globalState.player.playerScore,
});

export default connect(mapStateToProps)(Feedback);
