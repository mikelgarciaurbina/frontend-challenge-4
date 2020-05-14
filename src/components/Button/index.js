import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ disabled, icon, onClick }) {
  return (
    <button
      className="button landbot-input-send"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="icon is-large">
        <i className={icon}></i>
      </span>
    </button>
  );
}
Button.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  disabled: false,
  icon: '',
  onClick() {},
};
