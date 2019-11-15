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

const HeaderStyled = styled(Header)``;

const BlurBackgroundStyled = styled(BlurBackground)`
  position: fixed;
  top: 0;
  left: 0;
`;

const Layout = ({ children }) => {
  const { song: currentSong } = useGlobalPlayerSong();
  const [expanded, setExpanded] = useState(false);

  const onExpanded = useCallback(value => setExpanded(value), [setExpanded]);
  const bgSrc = useMemo(() => currentSong.avatarUrl);

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
      <div style={{ width: '100vw', height: '100vw', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <BlurBackgroundStyled src={bgSrc} alt={currentSong.name} />
      </div>
      <GlobalPlayer onExpanded={onExpanded} />
    </Wrapper>
  );
};

export default Layout;
