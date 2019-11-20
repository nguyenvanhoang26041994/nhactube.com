import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { BXHPlaylisSelector } from './selectors';
import { fetchBXH } from './actions';

export const useBXHPlaylist = () => {
  const playlist = useSelector(BXHPlaylisSelector);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ fetchBXH }, dispatch), [dispatch]);

  return useMemo(() => ({
    playlist,
    actions,
  }), [playlist, actions]);
};
