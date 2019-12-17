import React, { useEffect, useCallback } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { Song } from '../../components/commons';
import { useSongDetail } from './hooks';
import { useGlobalAudio, useGlobalPlayer } from '../../hooks';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: calc(100vh - 8rem);

  .__lyric {
    height: 100%;
  }

  .__player {
    border-right: 1px solid rgba(255, 255, 255,.1);
  }
`;

const SongDetail = ({ className }) => {
  const { id } = useParams();
  const { actions, song } = useSongDetail();
  const { currentSong, changeSong } = useGlobalPlayer();
  const { globalAudio } = useGlobalAudio();

  const playSong = useCallback(() => changeSong(song), [changeSong, song]);

  const playOrPauseSong = useCallback(() => {
    if (currentSong.id !== song.id) {
      return playSong();
    }

    if (globalAudio.paused) {
      return globalAudio.play();
    }

    return globalAudio.pause();
  }, [globalAudio, playSong, currentSong.id, song.id]);

  useEffect(() => {
    actions.fetchSong(id);
  }, [id]);

  return (
    <Wrapper className={cn('container mx-auto', className)}>
      <Song
        className="__player w-5/12"
        song={song}
        playOrPauseSong={playOrPauseSong}
      />
    </Wrapper>
  );
};

export default SongDetail;
