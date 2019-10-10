import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import { BlurBackground } from '../../../components/commons';
import CurrentSong from './CurrentSong';
import SongPool from './SongPool';
import { useGlobalPlayerSong, useGlobalPlayerPlaylist } from '../../../hooks';

const Wrapper = styled.div`
  /* transition: height 0.35s cubic-bezier(0.21, 0.63, 0.36, 1); */
  transition: all 0.5s cubic-bezier(0.21, 0.63, 0.36, 1);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const ExpandPlayer = ({ className, style, isExpanded, expandPlayerRef }) => {
  const { song: currentSong } = useGlobalPlayerSong();
  const { playlist: currentPlaylist } = useGlobalPlayerPlaylist();
  const [isSongPoolHidden, setSongPoolHidden] = useState(false);

  const isSongPoolActive = useMemo(() => !isSongPoolHidden && currentPlaylist.songs.length, [isSongPoolHidden, currentPlaylist.songs.length]);
  const onListIconClick = useCallback(() => setSongPoolHidden(prev => !prev), [setSongPoolHidden]);

  return (
    <Wrapper className={className} ref={expandPlayerRef} style={style}>
      {isExpanded && (
        <div className="flex w-full">
          <SongPool
            className={cn('w-1/2', { 'none-important': !isSongPoolActive })}
            isActive={isSongPoolActive}
          />
          <CurrentSong
            className="flex-1"
            isSongPoolActive={isSongPoolActive}
            isExpanded={isExpanded}
            onListIconClick={onListIconClick}
          />
        </div>
      )}
      <BlurBackground src={currentSong.avatarUrl} alt={currentSong.name} />
    </Wrapper>
  );
};

export default ExpandPlayer;
