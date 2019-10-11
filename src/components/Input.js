import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  background-color: rgba(0, 0, 0, 0.1);
  color: #fff;
  border: 0;
  outline: 0;
  padding-left: 0.75em;
  padding-right: 0.75em;
  height: 2em;
  font-size: ${props => props.theme.fontSizes[props.size]};
  font-family: inherit;
  border-radius: 0.25em;
`;

Input.displayName = 'Input';
Input.propTypes = {
  size: PropTypes.oneOf(['tiny', 'xs', 'sm', 'lg', 'base', 'xl', '2xl']),
};
Input.defaultProps = {
  size: 'base',
};

export default Input;
