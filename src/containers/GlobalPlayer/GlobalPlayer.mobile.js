import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import GlobalAudio from '../GlobalAudio';
import MiniPlayer from './MiniPlayer.mobile';
import { useGlobalPlayerSong } from '../../hooks';

const Wrapper = styled.div`
  transition: all 0.5s;
`;

const GlobalPlayer = ({ className, style }) => {
  const { song } = useGlobalPlayerSong();
  return (
    <Wrapper
      style={{
        opacity: song.url ? '1' : '0',
        height: song.url ? '5rem' : '0',
        ...style,
      }}
      className={className}
    >
      <GlobalAudio />
      <MiniPlayer />
    </Wrapper>
  );
};

export default GlobalPlayer;
