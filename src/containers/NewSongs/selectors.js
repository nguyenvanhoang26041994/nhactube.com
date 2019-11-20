import { createSelector } from 'reselect';
import { songSelector } from '../../store/selectors';

export const newSongsReducerSelector = state => state.newSongsReducer;

export const newSongsPlaylisSelector = createSelector(
  newSongsReducerSelector,
  (newSongsReducer) => ({
    ...newSongsReducer.playlist,
    songs: newSongsReducer.playlist.songs.map(song => songSelector(song)),
  }),
);
