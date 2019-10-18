import React, { useEffect, useRef, useCallback } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { SongKaraoke } from '../../components/commons';
import { useSongDetail } from './hooks';
import { useGlobalAudio } from '../../hooks';

const LyricTab = ({ className }) => {
  const { currentTime } = useGlobalAudio();
  const { song } = useSongDetail();

  return (
    <SongKaraoke
      className={className}
      lyric={song.lyric}
      currentTime={currentTime}
    />
  );
};

export default LyricTab;
