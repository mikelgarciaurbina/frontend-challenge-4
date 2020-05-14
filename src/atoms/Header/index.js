import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ children }) {
  return (
    <div className="landbot-header">
      <h1 className="subtitle">{children}</h1>
    </div>
  );
}
Header.propTypes = {
  children: PropTypes.node
};
Header.defaultProps = {
  children: '',
};

