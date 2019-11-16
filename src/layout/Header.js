import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Image } from '../components/core';
import { BlurBackground } from '../components/commons';

const Wrapper = styled.header`
  height: inherit;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: #fff;
  z-index: 1;
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
      <BlurBackground />
      <SmallWrapper className="container mx-auto">
        <Link to="/">
          <Logo src="/static/images/logo.png" />
        </Link>
      </SmallWrapper>
    </Wrapper>
  );
};

export default Header;
