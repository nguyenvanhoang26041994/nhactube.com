import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { playlistSuggestSelector } from './selectors';
import { fetchPlaylistSuggest } from './actions';

export const usePlaylistSuggest = () => {
  const playlists = useSelector(playlistSuggestSelector);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ fetchPlaylistSuggest }, dispatch), [dispatch]);

  return useMemo(() => ({
    playlists,
    actions,
  }), [playlists, actions]);
};
