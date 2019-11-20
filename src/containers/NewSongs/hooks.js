import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { newSongsPlaylisSelector } from './selectors';
import { fetchNewSongs } from './actions';

export const useNewSongsPlaylist = () => {
  const playlist = useSelector(newSongsPlaylisSelector);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ fetchNewSongs }, dispatch), [dispatch]);

  return useMemo(() => ({
    playlist,
    actions,
  }), [playlist, actions]);
};
