import React from 'react';

const UIButton = ({ label, ...rest }) => {
  return (
    <button type='button' {...rest}>
      {' '}
      {label}
    </button>
  );
};

export default UIButton;
