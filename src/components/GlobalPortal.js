import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import canUseDOM from '../utils/canUseDOM';

const renderNode = document.createElement('div');
renderNode.className = 'flag-portal';
document.body.appendChild(renderNode);

class GlobalPortal extends React.Component {
  componentDidMount() {
    const { className } = this.props;
    renderNode.classList.add(className);
  }

  render() {
    if (!canUseDOM) {
      return null;
    }

    const { children } = this.props;

    return ReactDOM.createPortal(children, renderNode);
  }
}

GlobalPortal.displayName = 'GlobalPortal';
GlobalPortal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  unmountCallback: PropTypes.func,
};
GlobalPortal.defaultProps = {
  unmountCallback: f => f,
};

export default GlobalPortal;
