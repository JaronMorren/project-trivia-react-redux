import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Answers from '../components/Answers';

class Game extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Answers />
      </>
    );
  }
}

export default connect()(Game);
