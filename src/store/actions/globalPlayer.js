import { globalPlayer } from '../constants';
import { globalPlayerMusicSelector } from '../selectors';

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

export const fetchLyricsRequest = () => ({
  type: globalPlayer.GET_LYRICS_REQUEST,
});

export const fetchLyricsFailure = () => ({
  type: globalPlayer.GET_LYRICS_FAILURE,
});

export const fetchLyricsSuccess = lyrics => ({
  type: globalPlayer.GET_LYRICS_SUCCESS,
  payload: lyrics,
});

export const fetchLyrics = () => async (dispatch, getState) => {
  dispatch(fetchLyricsRequest());

  const currentMusic = globalPlayerMusicSelector(getState());

  try {
    const data = await fetch(`https://www.nhactube.com/api/lyrics/${currentMusic.id}`).then(res => res.json());
    dispatch(fetchLyricsSuccess(data.data));
  } catch(e) {
    dispatch(fetchLyricsFailure());
  }
}
