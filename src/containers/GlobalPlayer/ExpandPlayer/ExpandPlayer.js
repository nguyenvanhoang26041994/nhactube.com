import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import { Icon } from '../../../components/core';
import { Playlist, Song, BlurBackground } from '../../../components/commons';
import { useGlobalPlayerSong, useGlobalPlayerPlaylist, useGlobalAudio } from '../../../hooks';

const Wrapper = styled.div`
  transition: all 0.75s cubic-bezier(0.21, 0.63, 0.36, 1);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 100%;

  .__song-enhancer {
    color: #fff;

    .__karaoke {
      color: #fff;

      .__lyric-line.--active {
        color: ${props => props.theme.colors['yellow-500']};
      }
    }
  }
`;

const PlaylistStyled = styled(Playlist)`
  border-right: 1px solid rgba(255, 255, 255,.1);
  padding: 3rem 0;
  color: #fff;

  .__song-bar-item {
    .__name {
      color: #fff;
    }

    .__artists-name {
      color: #dadde0;
    }
  }
`;

const SongEnhancerWrapper = styled.div`
  position: relative;

  .--haft {
    width: 50%;
  }
`;

const ExpandedContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  margin: 0 auto;
`;

const SongEnhancer = ({ wrapperClass, onListIconClick, isSongPoolActive, ...otherProps }) => {
  return (
    <SongEnhancerWrapper className={wrapperClass}>
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
    <Wrapper className={className} style={style}>
      {isExpanded && (
        <ExpandedContainer className="container" ref={expandPlayerRef}>
          <BlurBackground />
          <PlaylistStyled
            className="__playlist flex-1"
            isActive={isSongPoolActive}
            playlist={currentPlaylist}
          />
          <SongEnhancer
            wrapperClass="__song-enhancer w-5/12"
            song={currentSong}
            isSongPoolActive={isSongPoolActive}
            playOrPauseSong={playOrPauseSong}
            onListIconClick={onListIconClick}
          />
        </ExpandedContainer>
      )}
    </Wrapper>
  );
};

export default ExpandPlayer;
