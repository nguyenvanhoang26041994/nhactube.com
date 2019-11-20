import { createSelector } from 'reselect';
import { songSelector } from '../../store/selectors';

export const chartMusicReducerSelector = state => state.chartMusicReducer;

export const BXHPlaylisSelector = createSelector(
  chartMusicReducerSelector,
  (chartMusicReducer) => ({
    ...chartMusicReducer.playlist,
    songs: chartMusicReducer.playlist.songs.map(song => songSelector(song)),
  }),
);
