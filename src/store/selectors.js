import { createSelector } from 'reselect';

export const globalPlayerSelector = state => state.globalPlayer;

export const globalPlayerModeSelector = createSelector(
  globalPlayerSelector,
  globalPlayer => globalPlayer.mode,
);

export const globalPlayerMusicSelector = createSelector(
  globalPlayerSelector,
  globalPlayer => globalPlayer.music,
);

export const globalPlayerMusicsSelector = createSelector(
  globalPlayerSelector,
  globalPlayer => globalPlayer.musics,
);
