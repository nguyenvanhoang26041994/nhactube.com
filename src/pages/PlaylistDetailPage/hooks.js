import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { playlistDetail } from './selectors';
import { fetchPlaylist } from './actions';

export const usePlaylistDetail = () => {
  const playlist = useSelector(playlistDetail);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ fetchPlaylist }, dispatch), [dispatch]);

  return useMemo(() => ({
    playlist,
    actions,
  }), [playlist, actions]);
};
