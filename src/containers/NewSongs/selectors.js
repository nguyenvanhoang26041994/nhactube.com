import { createSelector } from 'reselect';
import { songSelector } from '../../store/selectors';
export const newSongsSelector = state => state.newSongsReducer;

export const newSongsPlaylisSelector = createSelector(
  newSongsSelector,
  (newSongsReducer) => ({
    ...newSongsReducer.playlist,
    songs: newSongsReducer.playlist.songs.map(song => songSelector(song)),
  }),
);
