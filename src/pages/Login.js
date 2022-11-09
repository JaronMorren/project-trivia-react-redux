import React from 'react';
import { connect } from 'react-redux';
import { getTokenAct } from '../redux/actions';

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

  onClickPlayButton = () => {
    const { dispatch } = this.props;
    dispatch(getTokenAct(dispatch));
  };

  render() {
    const { emailInput, nameInput, isButtonDisabled } = this.state;
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
        <button
          type="button"
          data-testid="btn-play"
          disabled={ isButtonDisabled }
          onClick={ this.onClickPlayButton }
        >
          Play
        </button>
      </form>
    );
  }
}

export default connect()(Login);
