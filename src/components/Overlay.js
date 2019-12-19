import React from 'react';
import PropTypes from 'prop-types';
import GlobalPortal from './GlobalPortal';

class Overlay extends React.Component {
  render () {
    const { children, overlay, className } = this.props;

    return (
      <React.Fragment>
        {children}
        <GlobalPortal className={className}>
          {overlay}
        </GlobalPortal>
      </React.Fragment>
  
    );
  }
}

Overlay.propTypes = {
  children: PropTypes.any,
  overlay: PropTypes.any,
  className: PropTypes.string,
};
Overlay.defaultProps = {};

export default Overlay;
