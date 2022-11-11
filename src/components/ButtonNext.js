import React from 'react';

class ButtonNext extends React.Component {
  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="btn-next"
        >
          Next
        </button>
      </div>
    );
  }
}

export default ButtonNext;
