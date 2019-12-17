import React, { useEffect } from 'react';
import GlobalPortal from './GlobalPortal';
import { getPageX, getPageY } from '../utils';

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

export default Overlay;
