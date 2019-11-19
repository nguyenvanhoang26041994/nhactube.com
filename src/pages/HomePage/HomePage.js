import React, { useEffect, useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import CardSkeleton from '../../components/CardSkeleton';
import SongCard from '../../containers/SongCard';
import PlaylistCard from '../../containers/PlaylistCard';
import { SlickSlider } from '../../components/commons';
import ShelfRenderer from './ShelfRenderer';
import ChartMusic from '../../containers/ChartMusic';
import { useAsyncStatus } from '../../hooks';
import { songSelector } from '../../store/selectors';

const Wrapper = styled.div`
`;

const PlaylistsWrapper = styled.div`
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
        setSongs(data.map(i => songSelector(i)));
        songsAsync.fetchSuccess();
      })
      .catch(() => songsAsync.fetchFailure());
  }, []);

  return (
    <Wrapper className="container mx-auto flex flex-col flex-wrap">
      <SlickSlider className="mb-5" />
      <ChartMusic className="mb-5" list={songs} />
      <ShelfRenderer title="CÓ THỂ BẠN MUỐN NGHE" wrapperClassName="mt-5">
        <PlaylistsWrapper className="w-full">
          {playlists.map(playlist => (
            <div className="p-1 w-1/5" key={playlist.id}>
              <PlaylistCard {...playlist} />
          </div>
          ))}
        </PlaylistsWrapper>
      </ShelfRenderer>
      <div style={{ height: '5rem' }} />
    </Wrapper>
  );
};

export default HomePage;
