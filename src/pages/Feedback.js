import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ButtonPlayAgain from '../components/ButtonPlayAgain';
import ButtonRanking from '../components/ButtonRanking';

// https://github.com/chrisblakely01/quiz-app/blob/master/final/src/App.js

class Feedback extends React.Component {
  render() {
    const { assertions, score } = this.props;
    const minimumassertions = 3;
    return (
      <div>
        <Header />
        <div>
          { (assertions < minimumassertions
            ? <p data-testid="feedback-text">Could be better...</p>
            : <p data-testid="feedback-text">Well Done!</p>)}
        </div>
        <div data-testid="feedback-total-score">{score}</div>
        <div data-testid="feedback-total-question">{assertions}</div>
        <ButtonPlayAgain />
        <ButtonRanking />
      </div>
    );
  }
}
Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (globalState) => ({
  score: globalState.player.score,
  assertions: globalState.player.assertions,
});

export default connect(mapStateToProps)(Feedback);
