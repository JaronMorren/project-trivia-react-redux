import React from 'react';
import PropTypes from 'prop-types';

class ButtonNext extends React.Component {
  render() {
    const { onClickNextButton } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="btn-next"
          onClick={ onClickNextButton }
        >
          Next
        </button>
      </div>
    );
  }
}

ButtonNext.propTypes = {
  onClickNextButton: PropTypes.func,
}.isRequired;

export default ButtonNext;
