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
  display: flex;
  cursor: pointer;

  .__switch {
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    color: #fff;
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 200% auto;
    background-image: linear-gradient(to right, #1FA2FF 0%, #12D8FA 51%, #1FA2FF 100%);
    border-radius: 10em;
    transition: 0.3s;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      height: ${baseSize}em;
      width: ${baseSize}em;
      background-color: #fff;
      border-radius: 10em;
      transition: 0.3s;
    }

    &:hover {
      background-position: right center;
    }
  }

  .__falseable,
  .__trueable {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .__input-checkbox {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .__switch {
      &:before {
        transform: translateX(100%);
      }
    }

    &:disabled + .__switch {
      cursor: not-allowed;
    }
  }
`;

const Switch = ({ className, size, color, inputRef, trueable, falseable, ...otherProps }) => {
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
      <div className="__switch">
        <span className="__falseable">{falseable}</span>
        <span className="__trueable">{trueable}</span>
      </div>
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
