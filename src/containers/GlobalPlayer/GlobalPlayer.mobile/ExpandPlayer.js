import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import { BlurBackground } from '../../../components/commons';
import CurrentMusic from '../ExpandPlayer/CurrentMusic';
import MusicPool from '../ExpandPlayer/MusicPool';
import { useGlobalPlayerMusic, useGlobalPlayerMusics } from '../../../hooks';

const Wrapper = styled.div`
  /* transition: height 0.35s cubic-bezier(0.21, 0.63, 0.36, 1); */
  transition: all 0.5s cubic-bezier(0.21, 0.63, 0.36, 1);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  overflow: hidden;
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
      <BlurBackground src={currentMusic.avatarUrl} alt={currentMusic.name} />
    </Wrapper>
  );
};

export default ExpandPlayer;
