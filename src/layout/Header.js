import React from 'react';
import styled from 'styled-components';

import { Icon, Image } from '../components/core';

const Wrapper = styled.header`
  height: 8rem;
  display: flex;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.1); */
  color: #fff;
`;

const SmallWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(Image)`
  height: 1.75rem;
  width: 1.75rem;
  cursor: pointer;
`;

const Header = ({ className }) => {
  return (
    <Wrapper className={className}>
      <SmallWrapper className="container mx-auto">
        {/* <Logo src="/static/images/logo.png" /> */}
      </SmallWrapper>
    </Wrapper>
  );
};

export default Header;
