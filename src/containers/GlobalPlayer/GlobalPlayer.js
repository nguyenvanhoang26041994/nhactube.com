import React, { useCallback, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import MiniPlayer from './MiniPlayer';
import ExpandPlayer from './ExpandPlayer';
import GlobalAudio from '../GlobalAudio';
import { useGlobalPlayerSong, useOnClickOutside, useRippleEffect } from '../../hooks';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  width: 100vw;
  z-index: 50;
  transition: all 0.5s;
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

const GlobalPlayer = ({ className, onExpanded }) => {
  const [expanded, setExpanded] = useState(false);
  const expandPlayerRef = useRef();
  const miniPlayerRef = useRef();

  const { song } = useGlobalPlayerSong();
  const toggleExpanded = useCallback(() => setExpanded(prev => !prev), [setExpanded]);

  const onClickExpandPlayerOutSide = useCallback(e => {
    if (miniPlayerRef.current.contains(e.target)) {
      return;
    }
    setExpanded(false);
  }, [miniPlayerRef.current]);

  useOnClickOutside(expandPlayerRef, onClickExpandPlayerOutSide);

  useEffect(() => {
    onExpanded(expanded);
  }, [expanded]);

  return (
    <Wrapper
      className={className}
      style={{
        opacity: song.url ? '1' : '0',
        height: song.url ? '4rem' : '0',
      }}
    >
      <GlobalAudio />
      <RelativeContainer className="container">
        <MiniPlayer
          isExpanded={expanded}
          onSongListIconClick={toggleExpanded}
          miniPlayerRef={miniPlayerRef}
        />
        <ExpandPlayerStyled
          style={{
            height: 'calc(100vh - 4rem)',
            transform: expanded ? null : 'translateY(100vh)',
            opacity: expanded ? '1' : '0',
          }}
          expandPlayerRef={expandPlayerRef}
          isExpanded={expanded}
        />
      </RelativeContainer>
    </Wrapper>
  );
};

export default GlobalPlayer;
