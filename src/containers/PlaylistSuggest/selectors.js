import { createSelector } from 'reselect';
import { playlistSelector } from '../../store/selectors';

export const playlistSuggestReducerSelector = state => state.playlistSuggestReducer;

export const playlistSuggestSelector = createSelector(
  playlistSuggestReducerSelector,
  (playlistSuggestReducer) => playlistSuggestReducer.playlists.map(playlist => playlistSelector(playlist)),
);
