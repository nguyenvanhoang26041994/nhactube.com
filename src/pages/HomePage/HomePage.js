import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlaylistCard from '../../containers/PlaylistCard';
import { SlickSlider } from '../../components/commons';
import ShelfRenderer from './ShelfRenderer';
import ChartMusic from '../../containers/ChartMusic';
import NewSongs from '../../containers/NewSongs';
import { useAsyncStatus } from '../../hooks';

const Wrapper = styled.div`
`;

const PlaylistsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const HomePage = () => {
  const [playlists, setPlaylists] = useState([]);
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

  return (
    <Wrapper className="container mx-auto flex flex-col flex-wrap">
      <SlickSlider className="mb-3" />
      <ShelfRenderer title="BẢNG XẾP HẠNG" wrapperClassName="mb-5">
        <ChartMusic />
      </ShelfRenderer>
      <ShelfRenderer title="CÓ THỂ BẠN MUỐN NGHE" wrapperClassName="mt-5">
        <PlaylistsWrapper className="w-full">
          {playlists.map(playlist => (
            <div className="p-1 w-1/5" key={playlist.id}>
              <PlaylistCard {...playlist} />
          </div>
          ))}
        </PlaylistsWrapper>
      </ShelfRenderer>
      <ShelfRenderer title="BÀI HÁT MỚI" wrapperClassName="mt-5">
        <NewSongs />
      </ShelfRenderer>
      <div style={{ height: '5rem' }} />
    </Wrapper>
  );
};

export default HomePage;
