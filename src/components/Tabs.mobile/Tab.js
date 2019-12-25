import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';

const Wrapper = styled.div`
  transition: 0.5s;

  &.--hidden {
    opacity: 0;
    width: 0;
    height: 0;
    overflow: hidden;
  }

  &.--active {
    opacity: 1;
  }
`;

const Tab = ({ className, active, children }) => {
  return (
    <Wrapper className={cn('__tab', { '--active': active, '--hidden': !active }, className)}>
      {children}
    </Wrapper>
  );
};

Tab.displayName = 'Tab';
Tab.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.any,
};
Tab.defaultProps = {};

export default Tab;
