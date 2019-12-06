import React, { useMemo, useCallback } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Image, Button } from '../components/core';
import { AvatarWithPlayButton } from '../components/commons';
import SongBar from '../containers/SongBar';
import { _chunk } from '../utils';
import { useTheme, useGlobalPlayerPlaylist } from '../hooks';

const Wrapper = styled.div`
  display: flex;
`;
const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 19rem;
 
  &.--dark {
    background-color: transparent;
  }
`;
const Avatar = styled(AvatarWithPlayButton)`
  width: 100%;
  height: 19rem;
`;

const List = styled.ul``;

const MusicCollection = ({ avatarUrl, name, id, songs, className }) => {
  const { isDark } = useTheme();
  const [first, second] = useMemo(() => songs ? _chunk(songs, 5) : [], [songs]);

  const { playlist } = useGlobalPlayerPlaylist();

  const handlePlayButtonClick = useCallback(() => {

  }, []);
  return (
    <Wrapper className={className}>
      <MainInfoWrapper className={cn('mx-2', { '--dark': isDark })}>
        <Avatar
          src={'https://firebasestorage.googleapis.com/v0/b/nhactube.appspot.com/o/images%2Fartists%2Fed-sheeran?alt=media' || avatarUrl}
          className="w-1/2 heavy-box-shadow"
          onPlayButtonClick={handlePlayButtonClick}
        />
      </MainInfoWrapper>
      <div className="flex flex-1">
        <List className="w-1/2">
          {first && first.map((song, idx) => (
            <li key={song.id}>
              <SongBar {...song} label={idx + 1} hiddenActions />
            </li>
          ))}
        </List>
        <List className="w-1/2">
          {second && second.map((song, idx) => (
            <li key={song.id}>
              <SongBar {...song} label={idx + 6} hiddenActions />
            </li>
          ))}
        </List>
      </div>
    </Wrapper>
  );
};

export default MusicCollection;
