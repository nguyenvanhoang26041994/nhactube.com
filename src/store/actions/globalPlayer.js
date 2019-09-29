import { globalPlayer } from '../constants';

export const changeMode = mode => ({
  type: globalPlayer.CHANGE_MODE,
  payload: mode,
});

export const changeMusic = music => ({
  type: globalPlayer.CHANGE_MUSIC,
  payload: music,
});

export const changeIsPlaying = isPlaying => ({
  type: globalPlayer.CHANGE_IS_PLAYING,
  payload: isPlaying,
});

export const changeMusics = musics => ({
  type: globalPlayer.CHANGE_MUSICS,
  payload: musics,
});
