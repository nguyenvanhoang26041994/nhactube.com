import { createSelector } from 'reselect';
import { songSelector } from '../../store/selectors';

export const chartMusicSelector = state => state.chartMusicReducer;

export const BXHPlaylisSelector = createSelector(
  chartMusicSelector,
  (chartMusicReducer) => ({
    ...chartMusicReducer.playlist,
    songs: chartMusicReducer.playlist.songs.map(song => songSelector(song)),
  }),
);
