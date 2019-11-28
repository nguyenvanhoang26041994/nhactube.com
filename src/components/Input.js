import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.2);
  color: ${props => props.theme.colors[props.color]};
  border: 0;
  outline: 0;
  padding-left: 0.75em;
  padding-right: 0.75em;
  height: 2em;
  font-size: ${props => props.theme.fontSizes[props.size]};
  font-family: inherit;
  font-weight: inherit;
  border-radius: 0.25em;

  &::placeholder {
    color: ${props => props.theme.colors.textWeak};
  }
`;

Input.displayName = 'Input';
Input.propTypes = {
  size: PropTypes.oneOf(['tiny', 'xs', 'sm', 'lg', 'base', 'xl', '2xl']),
};
Input.defaultProps = {
  size: 'base',
  color: 'text',
};

export default Input;
