import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';

import { BlurBackground } from '../components/commons';
import GlobalPlayer from '../containers/GlobalPlayer';
import Header from './Header';
import { useGlobalPlayerSong } from '../hooks';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MainWrapper = styled.main`
  position: relative;
`;

const HeaderStyled = styled(Header)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const Layout = ({ children }) => {
  const { song: currentSong } = useGlobalPlayerSong();
  const [expanded, setExpanded] = useState(false);

  const onExpanded = useCallback(value => setExpanded(value), [setExpanded]);
  const bgSrc = useMemo(() => expanded ? currentSong.avatarUrl : null);

  return (
    <Wrapper>
      <div
        style={{
          height: '4rem',
          display: expanded ? 'none' : null,
        }}
      >
        <HeaderStyled />
      </div>
      <MainWrapper
        className="flex-1"
        style={{
          display: expanded ? 'none' : null,
        }}
      >
        {children}
      </MainWrapper>
      <BlurBackground src={bgSrc} alt={currentSong.name} />
      <GlobalPlayer onExpanded={onExpanded} />
    </Wrapper>
  );
};

export default Layout;
