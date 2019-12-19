
import React, { useMemo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../../components/core';
import SongBar from '../../containers/SongBar';
import SongBarAlpha from '../../containers/SongBar.Alpha';
import Album from '../../components/Album';

import { useGlobalPlayer, useGlobalAudio } from '../../hooks';
import { _take } from '../../utils';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Handler = styled.div``;

const PlaylistName = styled.h3`
  font-weight: 400;
  font-size: ${props => props.theme.fontSizes.lg};
  padding: 0.75rem 0.5rem;
  text-transform: uppercase;
`;

const List = styled.ul`
  max-height: 70rem;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent; 
  }

  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, rgba(141, 141, 141, 0.35), rgba(141, 141, 141, 0.5), rgba(141, 141, 141, 0.35));
    border-radius: 999px;
  }
`;

const StandardChart = ({ useBXHPlaylist }) => {
  const { globalAudio } = useGlobalAudio();
  const { playlist, actions } = useBXHPlaylist();
  const { playPlaylist, currentPlaylist, currentSong } = useGlobalPlayer();

  useEffect(() => {
    actions.fetchBXH();
  }, []);

  const first15Music = useMemo(() => _take(playlist.songs, 15), [playlist.songs]);
  const handlePlayXBH = useCallback(() => {
    playPlaylist({
      ...playlist,
      songs: first15Music,
    });
  }, [playPlaylist, first15Music, playlist]);

  const isPlaylistPlaying = useMemo(() => playlist.id === currentPlaylist.id, [playlist.id, currentPlaylist.id]);
  const isPlayingSongInPlaylist = useMemo(() => isPlaylistPlaying && currentSong.isPlaying, [isPlaylistPlaying, currentSong.isPlaying]);

  const onPlayButtonClick = useCallback(() => {
    if (!isPlaylistPlaying) {
      return handlePlayXBH();
    }

    if (currentSong.isPlaying) {
      return globalAudio.pause();
    }

    return globalAudio.play();
  }, [isPlaylistPlaying, handlePlayXBH, currentSong.isPlaying]);

  const playButtonText = useMemo(() => {
    if (!isPlaylistPlaying) {
      return 'CHƠI TẤT CẢ';
    }
    if (currentSong.isPlaying) {
      return 'TẠM DỪNG';
    }

    return 'TIẾP TỤC';
  }, [isPlayingSongInPlaylist, currentSong.isPlaying]);

  return (
    <Wrapper>
      <Handler className="w-1/3">
        <Album list={first15Music} />
        <div className="flex flex-col justify-center items-center" style={{ height: '15rem' }}>
          <PlaylistName>{playlist.name}</PlaylistName>
          <Button onClick={onPlayButtonClick} rounded>
            {playButtonText}
          </Button>
        </div>
      </Handler>
      <List className="w-2/3 ml-2">
        {first15Music.map((song, idx) => {
          if (idx <= 2) {
            return (
            <li key={song.id}>
              <SongBarAlpha {...first15Music[idx]} hiddenActions label={idx + 1} />
            </li>
            );
          }
          return (
            <li key={song.id}>
              <SongBar {...song} hiddenActions label={`${idx + 1}`} />
            </li>
          );
        })}
      </List>
    </Wrapper>
  );
};

StandardChart.displayName = 'StandardChart';
StandardChart.propTypes = {
  useBXHPlaylist: PropTypes.func,
};
StandardChart.defaultProps = {
  useBXHPlaylist: f => f,
};

export default StandardChart;
