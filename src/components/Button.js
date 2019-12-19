import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 200% auto;
  background-image: linear-gradient(to right, #1FA2FF 0%, #12D8FA 51%, #1FA2FF 100%);
  color: #fff;
  border: 0;
  outline: 0;
  padding-left: 1.75em;
  padding-right: 1.75em;
  height: 2em;
  font-size: ${props => props.theme.fontSizes[props.size]};
  font-family: inherit;
  border-radius: 0.25em;
  cursor: pointer;
  user-select: none;
  transition: 0.5s;

  &:hover {
    background-position: right center;
  }

  &.--transparent {
    background-color: transparent;
    background-image: none;
    box-shadow:  none;
    color: inherit;
  }

  &.--rounded {
     border-radius: 999px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const Button = ({ className, size, color, textColor, rounded, buttonRef, transparent, ...otherProps }) => (
  <StyledButton
    className={cn(`px-2`, { '--transparent': transparent, '--rounded': rounded }, className)}
    size={size}
    color={color}
    textColor={textColor}
    ref={buttonRef}
    {...otherProps}
  />
);

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  rounded: PropTypes.bool,
  transparent: PropTypes.bool,
  buttonRef: PropTypes.any,
};
Button.defaultProps = {
  size: 'base',
  color: 'text',
};

export default Button;
