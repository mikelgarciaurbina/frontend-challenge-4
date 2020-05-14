import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ onChange, onKeyUp, placeholder, value }) {
  return (
    <input
      className="landbot-input"
      onChange={onChange}
      onKeyUp={onKeyUp}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
}
Input.propTypes = {
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};
Input.defaultProps = {
  onChange() {},
  onKeyUp() {},
  placeholder: '',
  value: '',
};
