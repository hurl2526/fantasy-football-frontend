import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, onClick, type, children }) => {
  // console.log("props",children)
  return (
    <button
      type={type}
      className={className}
      style={{ margin: '10px 15px' }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
Button.propType = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
