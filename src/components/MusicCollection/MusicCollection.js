import React, { useMemo } from 'react';
import styled from 'styled-components';

import { Image } from '../../components/core';
import SongBar from './SongBar';
import { _chunk } from '../../utils';

const Wrapper = styled.div`
  display: flex;
`;
const MainInfoWrapper = styled.div`

`;
const Avatar = styled(Image)``;

const List = styled.ul``;

const MusicCollection = ({ avatarUrl, name, id, songs, className }) => {
  const [first, second] = useMemo(() => songs ? _chunk(songs, 5) : [], [songs]);
  return (
    <Wrapper className={className}>
      <MainInfoWrapper className="w-1/4">
        <Avatar src={avatarUrl} className="w-1/2" />
      </MainInfoWrapper>
      <div className="flex-1 flex">
        <List className="w-1/2">
          {first && first.map(song => (
            <li key={song.id}>
              <SongBar {...song} />
            </li>
          ))}
        </List>
        <List className="w-1/2">
          {second && second.map(song => (
            <li key={song.id}>
              <SongBar {...song} />
            </li>
          ))}
        </List>
      </div>
    </Wrapper>
  );
};

export default MusicCollection;
