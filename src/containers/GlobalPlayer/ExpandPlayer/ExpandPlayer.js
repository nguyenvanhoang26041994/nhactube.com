import React, { useState, useMemo, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import { BlurBackground } from '../../../components/commons';
import CurrentMusic from './CurrentMusic';
import MusicPool from './MusicPool';
import { useGlobalPlayerMusic, useGlobalPlayerMusics } from '../../../hooks';

const Wrapper = styled.div`
  transition: height 0.35s cubic-bezier(0.21, 0.63, 0.36, 1);
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
      <div className="flex w-full">
        <MusicPool
          className={cn({ 'none-important': !isMusicPoolActive })}
          style={{ width: '26rem' }}
          isActive={isMusicPoolActive}
        />
        <CurrentMusic
          className="flex-1"
          isMusicPoolActive={isMusicPoolActive}
          isExpanded={isExpanded}
          onListIconClick={onListIconClick}
        />
      </div>
      <BlurBackground src={currentMusic.avatarUrl} />
    </Wrapper>
  );
};

export default ExpandPlayer;
