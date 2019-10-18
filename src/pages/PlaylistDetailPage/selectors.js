import { createSelector } from 'reselect';

export const playlistDetailPageSelector = state => state.playlistDetailPageReducer;

export const playlistDetail = createSelector(
  playlistDetailPageSelector,
  (playlistDetailPageReducer) => playlistDetailPageReducer.playlist,
);
