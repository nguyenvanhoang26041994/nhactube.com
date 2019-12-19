import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

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

MusicCollectionContainer.displayName = 'MusicCollectionContainer';
MusicCollectionContainer.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
MusicCollectionContainer.defaultProps = {};


export default MusicCollectionContainer;
