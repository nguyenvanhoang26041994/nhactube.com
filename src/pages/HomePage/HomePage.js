import React, { useEffect, useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import SongCardSkeleton from '../../components/SongCard/Skeleton';
import { PlaylistCard } from '../../components/commons';
import SongCard from '../../containers/SongCard';
import { useGlobalPlayer, useAsyncStatus } from '../../hooks';

const Wrapper = styled.div``;

const PlaylistsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SongsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const HomePage = () => {
  const [playlists, setPlaylists] = useState([]);
  const [songs, setSongs] = useState([]);
  const { playPlaylist, changeSong } = useGlobalPlayer();
  const { status, fetchRequest, fetchSuccess } = useAsyncStatus();

  const _playPlaylist = useCallback((playlistId) => {
    fetch(`https://www.nhactube.com/api/playlists/${playlistId}`)
      .then(res => res.json())
      .then(({ data }) => {
        playPlaylist(data);
      });
  }, [playPlaylist]);

  useEffect(() => {
    fetch('https://www.nhactube.com/api/playlists/new')
      .then(res => res.json())
      .then(({ data }) => {
        setPlaylists(data);
      });
  }, []);

  useEffect(() => {
    fetchRequest();
    fetch('https://www.nhactube.com/api/songs/new')
      .then(res => res.json())
      .then(({ data }) => {
        setSongs(data);
        fetchSuccess();
      });
  }, []);

  return (
    <Wrapper className="container mx-auto flex flex-col flex-wrap">
      <PlaylistsWrapper className="w-full">
        {playlists.map(playlist => (
          <div className="p-1 w-1/5">
           <PlaylistCard
             key={playlist.id}
             onClick={() => _playPlaylist(playlist.id)}
             {...playlist}
           />
         </div>
        ))}
      </PlaylistsWrapper>
      <SongsWrapper className="w-full">
        {songs.map(song => (
          <div className="p-1 w-1/5">
           <SongCard
             key={song.id}
             {...song}
           />
         </div>
        ))}
      </SongsWrapper>



      {status.isLoading && [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((v, idx) => (
        <div style={{ padding: '0.25rem', boxSizing: 'border-box' }} key={idx} className="w-1/4">
          <SongCardSkeleton />
        </div>
      ))}
    </Wrapper>
  );
};

export default HomePage;
