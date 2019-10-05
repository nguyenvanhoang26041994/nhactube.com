import React from 'react';
import styled from 'styled-components';

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
      <MainWrapper>
        {children}
      </MainWrapper>
      <GlobalPlayer />
    </Wrapper>
  );
};

export default Layout;
