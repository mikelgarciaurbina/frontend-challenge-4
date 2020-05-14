import React from 'react';
import PropTypes from 'prop-types';

export default function Footer({ children }) {
  return (
    <div className="landbot-input-container">
      <div className="field">
        <div className="control">
          {children}
        </div>
      </div>
    </div>
  );
}
Footer.propTypes = {
  children: PropTypes.node
};
Footer.defaultProps = {
  children: '',
};
