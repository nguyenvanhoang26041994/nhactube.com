import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: 2em;
  outline: 0;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fontSizes[props.size]};
  background-color: ${props => props.theme.colors[props.color]};
  color: ${props => props.theme.colors[props.textColor]};
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
  color: 'primary-500',
};

export default Button;
