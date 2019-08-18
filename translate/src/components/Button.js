import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
      <button
        className={`ui button ${color}`}
        type="submit"
      >
        <LanguageContext.Consumer>{(value) => this.renderSubmit(value)}</LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return <ColorContext.Consumer>{(color) => this.renderButton(color)}</ColorContext.Consumer>;
  }
}

// Alternate way to declare contextType outside class:
// Button.contextType = LanguageContext;

export default Button;
