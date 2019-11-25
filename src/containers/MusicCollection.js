import React, { useState, useEffect, useCallback } from 'react';
import MusicCollection from '../components/MusicCollection';

import { useArtistMusic } from './ArtistMusicCollection/hooks';

const MusicCollectionContainer = (props) => {
  const { actions } = useArtistMusic();

  useEffect(() => {
    if (props.id) {
      actions.fetchMusicForArtist(props.id);
    }
  }, [props.id]);

  return (
    <MusicCollection {...props} />
  );
};

export default MusicCollectionContainer;
