import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import { Icon } from '../../../components/core';
import { BlurBackground, Playlist, Song } from '../../../components/commons';
import { useGlobalPlayerSong, useGlobalPlayerPlaylist, useGlobalAudio } from '../../../hooks';

const Wrapper = styled.div`
  transition: all 0.5s cubic-bezier(0.21, 0.63, 0.36, 1);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 100%;
  color: #fff;
`;

const PlaylistStyled = styled(Playlist)`
  border-right: 1px solid rgba(255, 255, 255,.1);
  padding: 3rem 0;
`;

const SongEnhancerWrapper = styled.div`
  position: relative;
  width: 100%;

  .--haft {
    width: 50%;
  }
`;

const ToggleSongPool = styled(Icon)`
  position: absolute;
  left: 1rem;
  top: 1rem;
  z-index: 10;
`;

const SongEnhancer = ({ wrapperClass, onListIconClick, isSongPoolActive, ...otherProps }) => {
  return (
    <SongEnhancerWrapper className={wrapperClass}>
      <ToggleSongPool
        name="list-music"
        color={isSongPoolActive ? 'yellow-500' : null }
        onClick={onListIconClick}
      />
      <Song {...otherProps} />
    </SongEnhancerWrapper>
  );
}

const ExpandPlayer = ({ className, style, isExpanded, expandPlayerRef }) => {
  const { song: currentSong } = useGlobalPlayerSong();
  const { globalAudio } = useGlobalAudio();
  const { playlist: currentPlaylist } = useGlobalPlayerPlaylist();
  const [isSongPoolHidden, setSongPoolHidden] = useState(false);

  const isSongPoolActive = useMemo(() => !isSongPoolHidden && currentPlaylist.songs.length, [isSongPoolHidden, currentPlaylist.songs.length]);
  const onListIconClick = useCallback(() => setSongPoolHidden(prev => !prev), [setSongPoolHidden]);

  const playOrPauseSong = useCallback(() => {
    if (globalAudio.paused) {
      return globalAudio.play();
    }

    return globalAudio.pause();
  }, [globalAudio]);

  return (
    <Wrapper className={className} ref={expandPlayerRef} style={style}>
      {isExpanded && (
        <div className="flex w-full">
          <PlaylistStyled
            className={cn('__playlist w-1/2', { 'none-important': !isSongPoolActive })}
            isActive={isSongPoolActive}
            playlist={currentPlaylist}
          />
          <SongEnhancer
            wrapperClass="__song-enhancer flex-1"
            song={currentSong}
            isMyKingdom={!isSongPoolActive}
            isSongPoolActive={isSongPoolActive}
            playOrPauseSong={playOrPauseSong}
            onListIconClick={onListIconClick}
          />
        </div>
      )}
      <BlurBackground src={currentSong.avatarUrl} alt={currentSong.name} />
    </Wrapper>
  );
};

export default ExpandPlayer;
