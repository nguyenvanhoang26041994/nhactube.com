import React, { useMemo } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Image, Button } from '../components/core';
import SongBar from '../containers/SongBar.Flat';
import { _chunk } from '../utils';
import { useTheme } from '../hooks';

const Wrapper = styled.div`
  display: flex;
`;
const MainInfoWrapper = styled.div`
  background-color: ${props => props.theme.colors['gray-200']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  &.--dark {
    background-color: transparent;
  }
`;
const Avatar = styled(Image)`
  width: 10rem;
  height: 10rem;
  margin: 1.5rem 0;
`;

const Name = styled.h1`
  text-transform: uppercase;
  font-weight: 400;
`;

const List = styled.ul``;

const MusicCollection = ({ avatarUrl, name, id, songs, className }) => {
  const { isDark } = useTheme();
  const [first, second] = useMemo(() => songs ? _chunk(songs, 5) : [], [songs]);
  return (
    <Wrapper className={className}>
      <MainInfoWrapper className={cn('w-1/3', { '--dark': isDark })}>
        <Avatar src={'https://firebasestorage.googleapis.com/v0/b/nhactube.appspot.com/o/images%2Fplaylists%2Fbest-of-ed-sheeran.jpg?alt=media' || avatarUrl} className="w-1/2 heavy-box-shadow" />
        <Name>{name}</Name>  
      </MainInfoWrapper>
      <List className="w-1/3">
        {first && first.map((song, idx) => (
          <li key={song.id}>
            <SongBar {...song} label={idx + 1} hiddenActions />
          </li>
        ))}
      </List>
      <List className="w-1/3">
        {second && second.map((song, idx) => (
          <li key={song.id}>
            <SongBar {...song} label={idx + 6} hiddenActions />
          </li>
        ))}
      </List>
    </Wrapper>
  );
};

export default MusicCollection;
