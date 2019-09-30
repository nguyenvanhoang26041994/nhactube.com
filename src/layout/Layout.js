import React from 'react';
import styled from 'styled-components';

import { BlurBackground } from '../components/commons';
import GlobalPlayer from '../containers/GlobalPlayer';
import Header from './Header';
import { useGlobalPlayerMusic } from '../hooks';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MainWrapper = styled.main`
  position: relative;
`;

const Layout = ({ children }) => {
  const { music: currentMusic } = useGlobalPlayerMusic();
  return (
    <Wrapper>
      <Header />
      <MainWrapper className="flex-1">
        {children}
      </MainWrapper>
      <BlurBackground src={currentMusic.avatarUrl} alt={currentMusic.name} />
      <GlobalPlayer />
    </Wrapper>
  );
};

export default Layout;
