import { createSelector } from 'reselect';
import { playlistSelector } from '../../store/selectors';

export const topicMusicReducerSelector = state => state.topicMusicReducer;

export const topicMusicSelector = createSelector(
  topicMusicReducerSelector,
  (topicMusicReducer) => topicMusicReducer.playlists.map(playlist => playlistSelector(playlist)),
);
