import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ButtonPlayAgain from '../components/ButtonPlayAgain';
import ButtonRanking from '../components/ButtonRanking';

// https://github.com/chrisblakely01/quiz-app/blob/master/final/src/App.js

class Feedback extends React.Component {
  render() {
    const { playerScore } = this.props;
    const minimumCorrectAnswers = 3;
    console.log(playerScore);

    if (playerScore < minimumCorrectAnswers) {
      return (
        <>
          <Header />
          <h1 data-testid="feedback-text">Could be better...</h1>
          <ButtonPlayAgain />
          <ButtonRanking />
        </>
      );
    }

    if (playerScore >= minimumCorrectAnswers) {
      return (
        <>
          <Header />
          <h1 data-testid="feedback-text">Well Done!</h1>
          <ButtonPlayAgain />
          <ButtonRanking />
        </>
      );
    }
  }
}
Feedback.propTypes = {
  playerScore: PropTypes.number.isRequired,
};

const mapStateToProps = (globalState) => ({
  playerScore: globalState.player.correctAnswers,
});

export default connect(mapStateToProps)(Feedback);
