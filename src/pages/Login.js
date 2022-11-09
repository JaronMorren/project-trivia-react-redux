import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveAtLogin } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      nameInput: '',
      isButtonDisabled: true,
    };
  }

  buttonDisabledControl = () => {
    const { emailInput, nameInput } = this.state;
    if (nameInput.length !== 0 && emailInput.length !== 0) {
      this.setState({
        isButtonDisabled: false,
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => this.buttonDisabledControl());
  };

  render() {
    const { emailInput, nameInput, isButtonDisabled } = this.state;
    const { dispatch } = this.props;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type="email"
            name="emailInput"
            value={ emailInput }
            onChange={ this.handleChange }
            data-testid="input-gravatar-email"
            placeholder="Qual é o seu email do seu avatar?"
          />
        </label>
        <label htmlFor="name">
          Nome:
          <input
            id="name"
            type="text"
            name="nameInput"
            value={ nameInput }
            onChange={ this.handleChange }
            data-testid="input-player-name"
            placeholder="Qual é o seu nome?"
          />
        </label>
        <Link to="/game">
          <button
            type="button"
            data-testid="btn-play"
            disabled={ isButtonDisabled }
            onClick={ () => dispatch(saveAtLogin(
              emailInput,
              nameInput,
            )) }
          >
            Play
          </button>
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
