import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Answers from '../components/Answers';

class Game extends React.Component {
  componentWillUnmount() {
    this.savePlayerData();
  }

  savePlayerData = () => {
    const { name, score, email } = this.props;
    const currentPlayerData = { name, score, email };
    if (!localStorage.getItem('playersData')) {
      localStorage.setItem('playersData', JSON.stringify([]));
    }
    const playersData = JSON.parse(localStorage.getItem('playersData'));
    playersData.push(currentPlayerData);

    localStorage.setItem('playersData', JSON.stringify(playersData));
  };

  render() {
    const { history } = this.props;
    return (
      <>
        <Header />
        <Answers history={ history } />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  score: state.player.score,
  email: state.player.gravatarEmail,
});

Game.propTypes = {
  history: PropTypes.shape,
}.isRequired;

export default connect(mapStateToProps)(Game);
