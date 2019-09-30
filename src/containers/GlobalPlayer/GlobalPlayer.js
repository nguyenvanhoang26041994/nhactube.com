import React, { useCallback, useState, useRef, useMemo } from 'react';
import styled from 'styled-components';
import { BlurBackground } from '../../components/commons';
import MiniPlayer from './MiniPlayer';
import ExpandPlayer from './ExpandPlayer';
import { useGlobalPlayerMusic, useOnClickOutside, useGlobalPlayer, useGlobalAudio } from '../../hooks';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  width: 100vw;
  z-index: 50;
  transition: all 0.5s;
  background-color: ${props => props.theme.colors.lizard};
`;

const RelativeContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const ExpandPlayerStyled = styled(ExpandPlayer)`
  position: absolute;
  bottom: 100%;
  width: 100%;
  z-index: -1;
`;

const GlobalPlayer = ({ className }) => {
  const [expanded, setExpanded] = useState(false);
  const expandPlayerRef = useRef();
  const miniPlayerRef = useRef();

  const { music } = useGlobalPlayerMusic();
  const toggleExpanded = useCallback(() => setExpanded(prev => !prev), [setExpanded]);

  const onClickExpandPlayerOutSide = useCallback(e => {
    if (miniPlayerRef.current.contains(e.target)) {
      return;
    }
    setExpanded(false);
  }, [miniPlayerRef.current]);

  useOnClickOutside(expandPlayerRef, onClickExpandPlayerOutSide);

  return (
    <Wrapper
      className={className}
      style={{
        opacity: music.url ? '1' : '0',
        height: music.url ? '4rem' : '0',
      }}
    >
      <RelativeContainer className="container">
        <MiniPlayer
          isExpanded={expanded}
          onMusicListIconClick={toggleExpanded}
          miniPlayerRef={miniPlayerRef}
        />
        <ExpandPlayerStyled
          style={{ height: expanded ? 'calc(100vh - 4rem)' : '0' }}
          expandPlayerRef={expandPlayerRef}
          isExpanded={expanded}
        />
      </RelativeContainer>
      <BlurBackground src={music.avatarUrl} alt={music.name} />
    </Wrapper>
  );
};

export default GlobalPlayer;
