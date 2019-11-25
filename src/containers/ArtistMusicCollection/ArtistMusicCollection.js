import React, { useMemo, useEffect, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MusicCollection from '../../containers/MusicCollection';

import { useArtistMusic } from './hooks';
import { useGlobalPlayer } from '../../hooks';
import { _take } from '../../utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ArtistMusicCollection = ({ className }) => {
  const { playlists, actions } = useArtistMusic();

  useEffect(() => {
    actions.fetchArtistMusicCollection();
  }, []);

  const first3ArtistMusic = useMemo(() => _take(playlists, 3), [playlists]);

  return (
    <Wrapper className={className}>
      {first3ArtistMusic.map((playlist) => (
        <MusicCollection key={playlist.id} {...playlist} />
      ))}
    </Wrapper>
  )
};

export default ArtistMusicCollection;
