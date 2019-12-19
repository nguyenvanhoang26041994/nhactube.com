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

  const playlist = playlists[0] ? playlists[0] : { id: '', name: '', songs: [] };

  return (
    <Wrapper className={className}>
      <MusicCollection key={playlist.id + 1} {...playlist} className="mb-10" />
    </Wrapper>
  )
};

ArtistMusicCollection.displayName = 'ArtistMusicCollection';
ArtistMusicCollection.propTypes = {
  className: PropTypes.string,
};
ArtistMusicCollection.defaultProps = {};

export default ArtistMusicCollection;
