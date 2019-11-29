import { createSelector } from 'reselect';
import { songSelector } from '../../store/selectors';

export const chartMusicReducerSelector = state => state.chartMusicReducer;

export const vietnamReducerSelector = createSelector(
  chartMusicReducerSelector,
  chartMusicReducer => chartMusicReducer.vietnam,
);

export const USUKReducerSelector = createSelector(
  chartMusicReducerSelector,
  chartMusicReducer => chartMusicReducer.usuk,
);

export const BXHVietnamPlaylisSelector = createSelector(
  vietnamReducerSelector,
  (chartMusicReducer) => ({
    ...chartMusicReducer.playlist,
    songs: chartMusicReducer.playlist.songs.map(song => songSelector(song)),
  }),
);

export const BXHUSUKPlaylisSelector = createSelector(
  USUKReducerSelector,
  (chartMusicReducer) => ({
    ...chartMusicReducer.playlist,
    songs: chartMusicReducer.playlist.songs.map(song => songSelector(song)),
  }),
);
