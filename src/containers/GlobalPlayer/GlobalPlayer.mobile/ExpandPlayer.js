import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import { BlurBackground } from '../../../components/commons';
import CurrentMusic from '../ExpandPlayer/CurrentMusic';
import MusicPool from '../ExpandPlayer/MusicPool';
import MiniPlayer from '../MiniPlayer';

import { useGlobalPlayerMusic, useGlobalPlayerMusics } from '../../../hooks';

const Wrapper = styled.div`
  /* transition: height 0.35s cubic-bezier(0.21, 0.63, 0.36, 1); */
  transition: all 0.5s cubic-bezier(0.21, 0.63, 0.36, 1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-direction: row;
  overflow: hidden;
  position: relative;
`;

const MiniPlayerStyled = styled(MiniPlayer)`
  position: fixed;
  bottom: 0;
  height: 5rem;

  .w-3\\\/12 {
    width: 100%;
  }

  .w-7\\\/12,
  .w-2\\\/12 {
    display: none;
  }
`;

const ExpandPlayer = ({ className, style, isExpanded, expandPlayerRef }) => {
  const { music: currentMusic } = useGlobalPlayerMusic();
  const { musics: currentMusics } = useGlobalPlayerMusics();
  const [isMusicPoolHidden, setMusicPoolHidden] = useState(false);

  const isMusicPoolActive = useMemo(() => !isMusicPoolHidden && currentMusics.length, [isMusicPoolHidden, currentMusics.length]);
  const onListIconClick = useCallback(() => setMusicPoolHidden(prev => !prev), [setMusicPoolHidden]);

  return (
    <Wrapper className={className} ref={expandPlayerRef} style={style}>
      {isExpanded && (
        <div className="flex w-full">
          <MusicPool
            className={cn('flex-1', { 'none-important': !isMusicPoolActive })}
            isActive={isMusicPoolActive}
          />
          <CurrentMusic
            className={cn('flex-1', { 'none-important': isMusicPoolActive })}
            isMusicPoolActive={isMusicPoolActive}
            isExpanded={isExpanded}
            onListIconClick={onListIconClick}
          />
        </div>
      )}
      <MiniPlayerStyled />
      <BlurBackground src={currentMusic.avatarUrl} alt={currentMusic.name} />
    </Wrapper>
  );
};

export default ExpandPlayer;
