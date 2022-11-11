import React from 'react';
import { Link } from 'react-router-dom';

class ButtonLogin extends React.Component {
  render() {
    return (
      <Link to="/">
        <button
          type="button"
          data-testid="btn-go-home"
        >
          Login
        </button>
      </Link>
    );
  }
}

export default ButtonLogin;
