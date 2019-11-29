import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { BXHVietnamPlaylisSelector, BXHUSUKPlaylisSelector } from './selectors';
import { fetchBXHVietNam, fetchBXHUSUK } from './actions';

export const useBXHVietnamPlaylist = () => {
  const playlist = useSelector(BXHVietnamPlaylisSelector);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ fetchBXH: fetchBXHVietNam }, dispatch), [dispatch]);

  return useMemo(() => ({
    playlist,
    actions,
  }), [playlist, actions]);
};

export const useBXHUSUKPlaylist = () => {
  const playlist = useSelector(BXHUSUKPlaylisSelector);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ fetchBXH: fetchBXHUSUK }, dispatch), [dispatch]);

  return useMemo(() => ({
    playlist,
    actions,
  }), [playlist, actions]);
};
