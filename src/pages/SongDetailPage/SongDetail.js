import React, { useEffect } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { BlurBackground } from '../../components/commons';
import LyricTab from './LyricTab';
import SongTab from './SongTab';
import { useSongDetail } from './hooks';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: calc(100vh - 8rem);
  color: #fff;

  .__lyric {
    height: 100%;
  }
`;

const SongDetail = ({ className }) => {
  const { id } = useParams();
  const { actions, song } = useSongDetail();

  useEffect(() => {
    actions.fetchSong(id);
  }, [id]);

  return (
    <Wrapper className={cn('container mx-auto', className)}>
      <BlurBackground src={song.avatarUrl} alt={song.name} />
      <SongTab song={song} className="__disk w-1/2" />
      <LyricTab lyric={song.lyric} className="__lyric w-1/2" />
    </Wrapper>
  );
};

export default SongDetail;
