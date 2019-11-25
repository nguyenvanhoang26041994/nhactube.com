import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { artistMusicCollectionSelector } from './selectors';
import { fetchArtistMusicCollection, fetchMusicForArtist } from './actions';

export const useArtistMusic = () => {
  const playlists = useSelector(artistMusicCollectionSelector);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ fetchArtistMusicCollection, fetchMusicForArtist }, dispatch), [dispatch]);

  return useMemo(() => ({
    playlists,
    actions,
  }), [playlists, actions]);
};
