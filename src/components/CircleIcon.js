import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import Icon from '../components/Icon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background-color: white;
  height: 2.5em;
  width: 2.5em;
  user-select: none;
  transition: all 0.3s;

  &.--is-transparent {
    background-color: transparent;
  }
`;

const CircleIcon = ({ className, transparent, ...otherProps }) => {
  return (
    <Wrapper className={cn({ '--is-transparent': transparent }, className)}>
      <Icon {...otherProps} />
    </Wrapper>
  );
};

CircleIcon.displayName = 'CircleIcon';
CircleIcon.propTypes = {
  className: PropTypes.string,
  transparent: PropTypes.bool,
};
CircleIcon.defaultProps = {};

export default CircleIcon;
