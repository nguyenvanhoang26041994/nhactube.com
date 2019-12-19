import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Overlay from './Overlay';

const Style = createGlobalStyle`
  .popup-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    z-index: 10000;
  }
`;

const PopupModal = ({ children, overlay }) => {
  return (
    <Overlay className="popup-modal" overlay={overlay}>
      {children}
      <Style />
    </Overlay>
  );
};

PopupModal.displayName = 'PopupModal';
PopupModal.propTypes = {
  children: PropTypes.any,
  overlay: PropTypes.any,
};
PopupModal.defaultProps = {};

export default PopupModal;
