import React, { useEffect, useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import CardSkeleton from '../../components/CardSkeleton';
import SongCard from '../../containers/SongCard';
import PlaylistCard from '../../containers/PlaylistCard';
import ShelfRenderer from './ShelfRenderer';
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
  const songsAsync = useAsyncStatus();
  const playlistsAsync = useAsyncStatus();

  useEffect(() => {
    playlistsAsync.fetchRequest();
    fetch('https://www.nhactube.com/api/playlists/new')
      .then(res => res.json())
      .then(({ data }) => {
        setPlaylists(data);
        playlistsAsync.fetchSuccess();
      })
      .catch(() => playlistsAsync.fetchFailure());
  }, []);

  useEffect(() => {
    songsAsync.fetchRequest();
    fetch('https://www.nhactube.com/api/songs/new')
      .then(res => res.json())
      .then(({ data }) => {
        setSongs(data);
        songsAsync.fetchSuccess();
      })
      .catch(() => songsAsync.fetchFailure());
  }, []);

  return (
    <Wrapper className="container mx-auto flex flex-col flex-wrap">
      <ShelfRenderer title="Playlist ngầu hôm nay">
        <PlaylistsWrapper className="w-full">
          {playlists.map(playlist => (
            <div className="p-1 w-1/5" key={playlist.id}>
              <PlaylistCard {...playlist} />
          </div>
          ))}
          {playlistsAsync.status.isLoading && [0,0,0,0,0,].map((v, idx) => (
            <div className="p-1 w-1/5" key={idx}>
              <CardSkeleton />
            </div>
          ))}
        </PlaylistsWrapper>
      </ShelfRenderer>
      <ShelfRenderer title="Bài hát dành riêng cho bạn" wrapperClassName="mt-5">
        <SongsWrapper className="w-full">
          {songs.map(song => (
            <div className="p-1 w-1/5"  key={song.id}>
            <SongCard {...song} />
          </div>
          ))}
          {songsAsync.status.isLoading && [0,0,0,0,0,0,0,0,0,0].map((v, idx) => (
            <div className="p-1 w-1/5" key={idx}>
              <CardSkeleton />
            </div>
          ))}
        </SongsWrapper>
      </ShelfRenderer>
      <div style={{ height: '5rem' }} />
    </Wrapper>
  );
};

export default HomePage;
