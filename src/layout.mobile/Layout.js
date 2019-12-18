import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import GlobalPlayer from '../containers/GlobalPlayer/GlobalPlayer.mobile';

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
  return (
    <Wrapper>
      <Header />
      <MainWrapper>
        {children}
      </MainWrapper>
      <GlobalPlayer />
      <Footer />
    </Wrapper>
  );
};

export default Layout;
