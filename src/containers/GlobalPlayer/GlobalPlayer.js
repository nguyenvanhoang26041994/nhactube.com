import React, { useCallback, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MiniPlayer from './MiniPlayer';
import ExpandPlayer from './ExpandPlayer';
import GlobalAudio from '../GlobalAudio';
import { BlurBackground } from '../../components/commons';
import { useGlobalPlayerSong, useOnClickOutside, useTheme } from '../../hooks';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  width: 100vw;
  z-index: 50;
  transition: all 0.5s;
  background-color: ${props => props.theme.colors['gray-200']};
`;

const RelativeContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const ExpandPlayerStyled = styled(ExpandPlayer)`
  position: fixed;
  left: 0;
  top: 0;
  max-width: 100%;
  z-index: -1;
`;

const BlurBackgroundStyled = styled(BlurBackground)`
  .inner__blur {
    bottom: calc(-100% - 5rem);
  }
`;

const GlobalPlayer = ({ className, style, onExpanded }) => {
  const { isDark } = useTheme();
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
        height: song.url ? '5rem' : '0',
        ...style,
      }}
    >
      {isDark && <BlurBackgroundStyled />}
      <GlobalAudio />
      <RelativeContainer className="container">
        <MiniPlayer
          isExpanded={expanded}
          onSongListIconClick={toggleExpanded}
          miniPlayerRef={miniPlayerRef}
        />
        <ExpandPlayerStyled
          style={{
            height: 'calc(100vh - 5rem)',
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

GlobalPlayer.displayName = 'GlobalPlayer';
GlobalPlayer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onExpanded: PropTypes.func,
};
GlobalPlayer.defaultProps = {
  onExpanded: f => f,
};

export default GlobalPlayer;
