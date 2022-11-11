import React from 'react';
import { connect } from 'react-redux';
import ButtonLogin from '../components/ButtonLogin';

class Ranking extends React.Component {
  render() {
    return (
      <>
        <p>teste</p>
        <ButtonLogin />
      </>
    );
  }
}

export default connect()(Ranking);
