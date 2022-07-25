import React from 'react';
import './Button.scss';

// style each button appropriately with variable styling
const buttonClasses = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

// children relates to child elements eg, spans, p tags etc
const Button = ({ children, buttonType }) => {
  return (
    <button className={`button-container ${buttonClasses[buttonType]}`}>
      {children}
    </button>
  );
};

export default Button;
