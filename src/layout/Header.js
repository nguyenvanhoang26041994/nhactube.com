import React from 'react';
import styled from 'styled-components';

import { Image } from '../components/core';
import Search from '../components/Search';

const Wrapper = styled.header`
  height: inherit;
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);  
  color: #fff;
`;

const SmallWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(Image)`
  height: 2rem;
  width: 2rem;
  cursor: pointer;
`;

const Header = ({ className }) => {
  return (
    <Wrapper className={className}>
      <SmallWrapper className="container mx-auto">
        <Logo src="/static/images/logo.png" />
        <Search className="flex-1 mx-2" />
      </SmallWrapper>
    </Wrapper>
  );
};

export default Header;
