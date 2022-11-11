import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAnswersAct, updateScore } from '../redux/actions';
import '../style/Questions.css';

class Answers extends React.Component {
  constructor() {
    super();
    this.state = {
      currentAnswer: 0,
      randomAnswers: [],
      readyToRender: false,
      secondsLeft: 30,
      buttonDislable: false,
      answerClass: '',
      interval: 0,
    };
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    await dispatch(getAnswersAct(dispatch));
    this.validToken();
    this.timer();
  }

  validToken = () => {
    const { answersResponseCode, history } = this.props;
    const number = 3;
    if (answersResponseCode === number) {
      localStorage.clear();
      history.push('/');
    } else {
      this.setState({ readyToRender: true });
      this.randomQuestion();
    }
  };

  timer = () => {
    let { secondsLeft } = this.state;
    const segundo = 1000;
    const interval = setInterval(() => {
      if (secondsLeft > 0) {
        this.setState({ secondsLeft: secondsLeft -= 1 });
      } else {
        this.setState({ buttonDislable: true });
        clearInterval(interval);
      }
    }, segundo);
    this.setState({ interval });
  };

  randomizerAnswers = (answers) => {
    const myArr = [...answers];
    const randomizedArr = [];

    while (myArr.length > 0) {
      const randomIndex = Math.floor(Math.random() * myArr.length);
      randomizedArr.push(myArr[randomIndex]);
      myArr.splice(randomIndex, 1);
    }
    return randomizedArr;
    // função retirada do link: https://stackoverflow.com/questions/56501078/randomizing-quiz-answers-fetched-from-a-rest-api
  };

  randomQuestion = () => {
    const { currentAnswer } = this.state;
    const { answersResults } = this.props;
    if (answersResults !== undefined) {
      const correctAnswer = answersResults[currentAnswer].correct_answer;
      const incorrectAnswer = answersResults[currentAnswer].incorrect_answers;
      const allAnswers = [...incorrectAnswer, correctAnswer];
      const randomAnswers = this.randomizerAnswers(allAnswers);
      this.setState({
        randomAnswers,
      });
    }
  };

  classNameControll = (clicked) => {
    if (clicked === true) {
      this.setState({
        answerClass: '-clicked',
      });
    }
  };

  click = (event) => {
    const { interval, currentAnswer, secondsLeft } = this.state;
    clearInterval(interval);
    this.classNameControll(true);
    const { answersResults, dispatch } = this.props;
    const correctAnswer = answersResults[currentAnswer].correct_answer;
    const difficultyNumber = {
      hard: 3, medium: 2, easy: 1,
    };
    const { difficulty } = answersResults[currentAnswer];
    const ten = 10;
    if (event.target.innerHTML === correctAnswer) {
      dispatch(updateScore(ten + (difficultyNumber[difficulty] * secondsLeft)));
    }
  };

  render() {
    const {
      currentAnswer, randomAnswers, readyToRender, buttonDislable, answerClass,
    } = this.state;
    const { answersResults } = this.props;
    return (
      <main>
        {
          readyToRender && (
            <>
              <h3
                data-testid="question-category"
              >
                { answersResults[currentAnswer].category }
              </h3>
              <h2
                data-testid="question-text"
              >
                { answersResults[currentAnswer].question }
              </h2>
              <div data-testid="answer-options">
                {
                  randomAnswers.map((answer, index) => {
                    const test = () => {
                      if (answer === answersResults[currentAnswer].correct_answer) {
                        return 'correct-answer';
                      }
                      const wrongAnswers = answersResults[currentAnswer]
                        .incorrect_answers;
                      const answerIndex = wrongAnswers.indexOf(answer);
                      const result = `wrong-answer-${answerIndex}`;
                      return result;
                    };
                    return (
                      <button
                        key={ index }
                        type="button"
                        className={ `${test()}${answerClass}` }
                        data-testid={ test() }
                        disabled={ buttonDislable }
                        onClick={ this.click }
                      >
                        { answer }
                      </button>
                    );
                  })
                }
              </div>
            </>
          )
        }
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  answersResponseCode: state.game.answers.response_code,
  answersResults: state.game.answers.results,
});

Answers.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Answers);
