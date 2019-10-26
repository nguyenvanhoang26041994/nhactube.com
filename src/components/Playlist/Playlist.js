import React from 'react';
import styled from 'styled-components';

import { Icon } from '../../components/core';
import SongItem from './SongItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const OtherWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 1rem 1rem 1rem 1rem;
  cursor: pointer;
  white-space: nowrap;
`;

const List = styled.ul`
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  height:100%;

  & li:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.01);
  }

  &::-webkit-scrollbar {
    width: 3px;
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

const Playlist = ({ className, style, playlist }) => {
  return (
    <Wrapper className={className} style={style}>
      <OtherWrapper>
        <Title>
          <Icon name="list-music" className="mr-2" />
          Danh sách phát ({playlist.songs.length})
        </Title>
        <List>
          {playlist.songs.map((song, idx) => (
            <li key={song.id}>
              <SongItem {...song} firstText={idx + 1}>{song.name}-{song.artistsName}</SongItem>
            </li>
          ))}
        </List>
      </OtherWrapper>
    </Wrapper>
  );
};

export default Playlist;
