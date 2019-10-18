import React, { useEffect } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { BlurBackground } from '../../components/commons';
import { usePlaylistDetail } from './hooks';
import { useGlobalPlayer } from '../../hooks';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: calc(100vh - 8rem);
  color: #fff;
`;

const PlaylistDetail = ({ className }) => {
  const { id } = useParams();
  const { currentSong, playPlaylist } = useGlobalPlayer();
  const { actions, playlist } = usePlaylistDetail();

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
      <BlurBackground src={currentSong.avatarUrl} alt={currentSong.name} />
    </Wrapper>
  );
};

export default PlaylistDetail;
