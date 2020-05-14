import React from 'react';
import PropTypes from 'prop-types';

export default function Body({ children, innerRef }) {
  return (
    <div id="landbot-messages-container" className="landbot-messages-container" ref={innerRef}>
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
