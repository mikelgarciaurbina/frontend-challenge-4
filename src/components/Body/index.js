import React from 'react';
import PropTypes from 'prop-types';

export default function Body({ children }) {
  return (
    <div id="landbot-messages-container" className="landbot-messages-container">
      {children}
    </div>
  );
}
Body.propTypes = {
  children: PropTypes.node
};
Body.defaultProps = {
  children: '',
};
