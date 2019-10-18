import React, { useEffect } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Lyric from './Lyric';
import SongBar from './SongBar';
import { useSongDetail } from './hooks';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .__lyric {
    height: 20rem;
  }
`;

const SongDetail = ({ className }) => {
  const { id } = useParams();
  const { actions, song } = useSongDetail();
  useEffect(() => {
    actions.fetchSong(id);
  }, []);

  return (
    <Wrapper className={cn('container mx-auto', className)}>
      <SongBar song={song} />
      {/* <Lyric lyric={song.lyric} className="__lyric" /> */}
    </Wrapper>
  );
};

export default SongDetail;
