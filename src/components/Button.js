import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  color: ${props => props.theme.colors[props.color]};
  border: 0;
  outline: 0;
  padding-left: 0.75em;
  padding-right: 0.75em;
  height: 2em;
  font-size: ${props => props.theme.fontSizes[props.size]};
  font-family: inherit;
  border-radius: 0.25em;
  cursor: pointer;
  user-select: none;

  &:disabled {
    cursor: not-allowed;
  }
`;

const Button = ({ className, size, color, textColor, rounded, buttonRef, ...otherProps }) => (
  <StyledButton
    className={cn(`px-2`, className)}
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
};
Button.defaultProps = {
  size: 'base',
  color: 'text',
};

export default Button;
