import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SongDisk, SongKaraoke } from '../components/commons';
import SongBar from '../components/SongBar';
import { useGlobalAudio } from '../hooks';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  overflow: hidden;
  transition: all 0.5s;
  position: relative;
`;

const SongDiskStyled = styled(SongDisk)`
  height: 40em;
  width: 100%;
`;

const CurrentSongLyricStyled = styled(SongKaraoke)`
  flex-grow: 1;
  padding: 0 0 3rem 0;
  box-sizing: border-box;
  width: 100%;
`;

const Song = ({ className, song, playOrPauseSong }) => {
  const { currentTime } = useGlobalAudio();

  return (
    <Wrapper className={className}>
      <SongBar isActive {...song} className="w-full" />
      <SongDiskStyled
        {...song}
        hiddenInfo
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

Song.displayName = 'Song';
Song.propTypes = {
  className: PropTypes.string,
  song: PropTypes.object,
  playOrPauseSong: PropTypes.func,
};
Song.defaultProps = {
  song: {},
  playOrPauseSong: f => f,
};

export default Song;
