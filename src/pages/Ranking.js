import React from 'react';
import { connect } from 'react-redux';
import ButtonLogin from '../components/ButtonLogin';

class Ranking extends React.Component {
  render() {
    return (
      <form>
        <h2 data-testid="ranking-title">Ranking</h2>
        <ButtonLogin />
      </form>
    );
  }
}

export default connect()(Ranking);
