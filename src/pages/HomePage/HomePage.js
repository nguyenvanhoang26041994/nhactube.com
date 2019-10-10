import React, { useEffect, useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import SongCardSkeleton from '../../components/SongCard/Skeleton';
import { useGlobalPlayer, useAsyncStatus } from '../../hooks';

const Wrapper = styled.div``;

const HomePage = () => {
  const [playlists, setPlaylists] = useState([]);
  const { playPlaylist } = useGlobalPlayer();
  const { status, fetchRequest, fetchSuccess } = useAsyncStatus();

  const _playPlaylist = useCallback((playlistId) => {
    fetch(`https://www.nhactube.com/api/playlists/${playlistId}`)
      .then(res => res.json())
      .then(({ data }) => {
        playPlaylist(data);
      });
  }, [playPlaylist]);

  useEffect(() => {
    fetchRequest();
    fetch('https://www.nhactube.com/api/playlists/new')
      .then(res => res.json())
      .then(({ data }) => {
        setPlaylists(data);
        fetchSuccess();
      });
  }, []);

  return (
    <Wrapper className="container mx-auto flex flex-wrap">
      {playlists.map(playlist => (
        <div key={playlist.id}>
          <button onClick={() => _playPlaylist(playlist.id)}>{playlist.name}</button>
        </div>
      ))}
      {status.isLoading && [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((v, idx) => (
        <div style={{ padding: '0.25rem', boxSizing: 'border-box' }} key={idx} className="w-1/4">
          <SongCardSkeleton />
        </div>
      ))}
    </Wrapper>
  );
};

export default HomePage;
