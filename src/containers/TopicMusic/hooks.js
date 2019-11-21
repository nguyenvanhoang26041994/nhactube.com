import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { topicMusicSelector } from './selectors';
import { fetchTopicMusic } from './actions';

export const useTopicPlaylist = () => {
  const playlists = useSelector(topicMusicSelector);
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({ fetchTopicMusic }, dispatch), [dispatch]);

  return useMemo(() => ({
    playlists,
    actions,
  }), [playlists, actions]);
};
