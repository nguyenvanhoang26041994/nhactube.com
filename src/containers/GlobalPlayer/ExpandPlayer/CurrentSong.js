import React, { useState, useEffect, useCallback, useMemo } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Icon } from '../../../components/core';
import { SongDisk, SongKaraoke } from '../../../components/commons';
import { useGlobalPlayerSong, useGlobalAudio } from '../../../hooks';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  transition: all 0.5s;
  position: relative;
  color: #fff;

  &.--is-my-king-dom {
    flex-direction: row;

    .__song-disk,
    .__song-karaoke {
      width: 50%;
      height: 100%;
    }
  }
`;

const SongDiskStyled = styled(SongDisk)`
`;

const ToggleSongPool = styled(Icon)`
  position: absolute;
  left: 1rem;
  top: 1rem;
  z-index: 10;
`;

const CurrentSongLyricStyled = styled(SongKaraoke)`
  height: 25rem;
  padding: 0 0 3rem 0;
  box-sizing: border-box;
  width: 100%;
`;

const CurrentSong = ({ className, isSongPoolActive, isExpanded, onListIconClick }) => {
  const { song } = useGlobalPlayerSong();
  const { currentTime, globalAudio } = useGlobalAudio();

  const playOrPauseSong = useCallback(() => {
    if (globalAudio.paused) {
      return globalAudio.play();
    }

    return globalAudio.pause();
  }, []);

  return (
    <Wrapper className={cn(className, { '--is-my-king-dom': !isSongPoolActive })}>
      <ToggleSongPool
        name="list-music"
        color={isSongPoolActive ? 'yellow-500' : null }
        onClick={onListIconClick}
      />
      <SongDiskStyled
        className="__song-disk"
        isPlaying={song.isPlaying}
        name={song.name}
        playOrPauseSong={playOrPauseSong}
        avatarUrl={song.avatarUrl}
        artistsName={song.artistsName}
      />
      <CurrentSongLyricStyled
        className={"__song-karaoke"}
        lyric={song.lyric}
        currentTime={currentTime}
      />
    </Wrapper>
  );
};

export default CurrentSong;
