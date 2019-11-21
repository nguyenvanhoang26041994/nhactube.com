import React, { useEffect, useCallback } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { BlurBackground, Playlist, Song } from '../../components/commons';
import { usePlaylistDetail } from './hooks';
import { useGlobalPlayer, useGlobalAudio } from '../../hooks';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: calc(100vh - 8rem);
  color: #fff;

  .__playlist {
    border-right: 1px solid rgba(255, 255, 255,.1);
  }
`;

const PlaylistDetail = ({ className }) => {
  const { id } = useParams();
  const { currentSong, playPlaylist } = useGlobalPlayer();
  const { actions, playlist } = usePlaylistDetail();
  const { globalAudio } = useGlobalAudio();

  const playOrPauseSong = useCallback(() => {
    if (globalAudio.paused) {
      return globalAudio.play();
    }

    return globalAudio.pause();
  }, [globalAudio]);

  useEffect(() => {
    const fetchThenPlay = async () => {
      const playlistData = await actions.fetchPlaylist(id);
      if (playlistData && playlistData.songs && playlistData.songs[0]) {
        playPlaylist(playlistData);
      }
    }

    fetchThenPlay();
  }, [id]);

  return (
    <Wrapper className={cn('container mx-auto', className)}>
      <Playlist
        className="__playlist flex-1"
        playlist={playlist}
      />
      {currentSong.id && (
        <Song
          className="__song w-5/12"
          song={currentSong}
          playOrPauseSong={playOrPauseSong}
        />
      )}
    </Wrapper>
  );
};

export default PlaylistDetail;
