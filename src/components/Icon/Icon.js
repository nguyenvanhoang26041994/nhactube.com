import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import icons from './svg';

const IconWrapper = styled.span`
  height: 1em;
  width: 1em;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  color: ${props => props.theme.colors[props.color]};
  font-size: ${props => props.theme.fontSizes[props.size]};
  transition: all 0.3s;

  > svg.__svg {
    fill: currentColor;
    width: 100%;
    height: 100%;
  }
`;

const Icon = ({ className, name, size, color, iconRef, ...otherProps }) => {
  const I = icons[name] || (() => null);

  return (
    <IconWrapper
      className={cn(`icon-${name}`, className)}
      size={size}
      color={color}
      ref={iconRef}
      {...otherProps}
    >
      <I className="__svg" />
    </IconWrapper>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};
Icon.defaultProps = {};

export default Icon;
