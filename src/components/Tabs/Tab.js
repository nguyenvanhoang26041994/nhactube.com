import React from 'react';
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

export default Tab;
