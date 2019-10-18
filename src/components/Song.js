import React, { useCallback } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import { SongDisk, SongKaraoke } from '../components/commons';
import { useGlobalAudio } from '../hooks';

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

    .__disk,
    .__karaoke {
      width: 50%;
      height: 100%;
    }
  }
`;

const SongDiskStyled = styled(SongDisk)`
`;

const CurrentSongLyricStyled = styled(SongKaraoke)`
  height: 25rem;
  padding: 0 0 3rem 0;
  box-sizing: border-box;
  width: 100%;
`;

const Song = ({ className, song, playOrPauseSong, isMyKingdom }) => {
  const { currentTime } = useGlobalAudio();

  return (
    <Wrapper className={cn(className, { '--is-my-king-dom': isMyKingdom })}>
      <SongDiskStyled
        {...song}
        playOrPauseSong={playOrPauseSong}
        className="__disk"
      />
      <CurrentSongLyricStyled
        lyric={song.lyric}
        currentTime={song.isPlaying ? currentTime : 0}
        className="__karaoke"
      />
    </Wrapper>
  );
};

export default Song;
