import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const Wrapper = styled.div``;

const Tab = ({ className, children }) => {
  return (
    <Wrapper className={cn('__tab', className)}>
      {children}
    </Wrapper>
  );
};

export default Tab;
