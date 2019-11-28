import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cn from 'classnames';

const baseSize = 1.6;
const Wrapper = styled.label`
  height: ${baseSize}em;
  width:${2 * baseSize}em;
  font-size: ${props => props.theme.fontSizes[props.size]};
  position: relative;
  display: inline-block;

  .__switch {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10em;
    transition: 0.3s;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      height: ${baseSize}em;
      width: ${baseSize}em;
      background-color: white;
      border-radius: 10em;
      transition: 0.3s;
    }
  }

  .__input-checkbox {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .__switch {
      /* background-color: rgba(0, 0, 0, 0.1); */
      &:before {
        transform: translateX(100%);
      }
    }

    &:disabled + .__switch {
      cursor: not-allowed;
    }
  }
`;

const Switch = ({ className, size, color, inputRef, ...otherProps }) => {
  return (
    <Wrapper
      className={className}
      size={size}
      color={color}
    >
      <input
        {...otherProps}
        ref={inputRef}
        className="__input-checkbox"
        type="checkbox"
      />
      <span className="__switch" />
    </Wrapper>
  );
};

Switch.displayName = 'Switch';
Switch.propTypes = {
  inputRef: PropTypes.any,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};
Switch.defaultProps = {
  onChange: f => f,
  size: 'base',
  color: '',
};


export default Switch;
