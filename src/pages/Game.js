import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Answers from '../components/Answers';

class Game extends React.Component {
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

Game.propTypes = {
  history: PropTypes.shape,
}.isRequired;

export default connect()(Game);
