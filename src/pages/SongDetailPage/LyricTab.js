import React, { useEffect, useRef, useCallback } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { SongKaraoke } from '../../components/commons';
import { useSongDetail } from './hooks';
import { useGlobalAudio, useGlobalPlayerSong } from '../../hooks';

const LyricTab = ({ className }) => {
  const { currentTime } = useGlobalAudio();
  const { song: currentSong } = useGlobalPlayerSong();
  const { song } = useSongDetail();

  return (
    <SongKaraoke
      className={className}
      lyric={song.lyric}
      currentTime={currentSong.id === song.id ? currentTime : 0}
    />
  );
};

export default LyricTab;
