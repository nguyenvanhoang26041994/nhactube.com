import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { globalPlayerPlaylistSelector } from '../store/selectors';
import { changePlaylist } from '../store/actions/globalPlayer';

export default () => {
  const playlist = useSelector(globalPlayerPlaylistSelector);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ changePlaylist }, dispatch), [dispatch]);

  return useMemo(() => ({
    playlist,
    actions,
  }), [playlist, actions]);
};
