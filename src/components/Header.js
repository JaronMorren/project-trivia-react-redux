import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      hash: '',
    };
  }

  componentDidMount() {
    const { email } = this.props;
    this.setState({
      hash: md5(email).toString(),
    });
  }

  render() {
    const { name, score } = this.props;
    const { hash } = this.state;
    return (
      <header>
        <img data-testid="header-profile-picture" alt="profile" src={ `https://www.gravatar.com/avatar/${hash}` } />
        <h2 data-testid="header-player-name">{ name }</h2>
        <h2 data-testid="header-score">{score}</h2>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.player.name,
  score: state.player.score,
  email: state.player.email,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,

};

export default connect(mapStateToProps)(Header);
